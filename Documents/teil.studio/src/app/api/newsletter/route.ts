import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

async function addToNewsletterKV(email: string): Promise<void> {
  try {
    // Check if email already exists
    const existingEmail = await kv.get(`newsletter:${email}`);
    if (existingEmail) {
      throw new Error('Email already subscribed');
    }
    
    // Add new subscriber with timestamp
    const subscriberData = {
      email,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };
    
    // Store in KV with email as key
    await kv.set(`newsletter:${email}`, subscriberData);
    
    // Add to subscribers list for easy retrieval
    await kv.sadd('newsletter:subscribers', email);
    
  } catch (error) {
    console.error('Newsletter KV error:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Add to Vercel KV database
    await addToNewsletterKV(email);

    return NextResponse.json({ message: 'Email added to newsletter list' }, { status: 200 });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    
    if (error instanceof Error && error.message === 'Email already subscribed') {
      return NextResponse.json({ error: 'This email is already subscribed' }, { status: 409 });
    }
    
    return NextResponse.json({ error: 'Failed to add to newsletter' }, { status: 500 });
  }
}
