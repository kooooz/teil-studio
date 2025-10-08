import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET(request: NextRequest) {
  try {
    // Get all subscriber emails from the set
    const subscriberEmails = await kv.smembers('newsletter:subscribers');
    
    // Get detailed data for each subscriber
    const subscribers = [];
    for (const email of subscriberEmails) {
      const subscriberData = await kv.get(`newsletter:${email}`);
      if (subscriberData) {
        subscribers.push(subscriberData);
      }
    }
    
    // Sort by timestamp (newest first)
    subscribers.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    
    return NextResponse.json({
      subscribers,
      total: subscribers.length,
      lastUpdated: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error reading newsletter data:', error);
    return NextResponse.json({ error: 'Failed to read newsletter data' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // Get all subscriber emails
    const subscriberEmails = await kv.smembers('newsletter:subscribers');
    
    // Delete each subscriber's data
    for (const email of subscriberEmails) {
      await kv.del(`newsletter:${email}`);
    }
    
    // Clear the subscribers set
    await kv.del('newsletter:subscribers');
    
    return NextResponse.json({ message: 'Newsletter data cleared' });
    
  } catch (error) {
    console.error('Error clearing newsletter data:', error);
    return NextResponse.json({ error: 'Failed to clear newsletter data' }, { status: 500 });
  }
}


