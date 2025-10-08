import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';


async function addToNewsletterFile(email: string): Promise<void> {
  const dataPath = path.join(process.cwd(), 'data', 'newsletter.json');
  
  try {
    // Read existing data
    const fileContent = await fs.readFile(dataPath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Check if email already exists
    const emailExists = data.subscribers.some((sub: any) => sub.email === email);
    if (emailExists) {
      throw new Error('Email already subscribed');
    }
    
    // Add new subscriber
    const newSubscriber = {
      email,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };
    
    data.subscribers.push(newSubscriber);
    data.lastUpdated = new Date().toISOString();
    
    // Write back to file
    await fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf8');
    
  } catch (error) {
    console.error('Newsletter file error:', error);
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

    // Add to local JSON file
    await addToNewsletterFile(email);

    return NextResponse.json({ message: 'Email added to newsletter list' }, { status: 200 });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    
    if (error instanceof Error && error.message === 'Email already subscribed') {
      return NextResponse.json({ error: 'This email is already subscribed' }, { status: 409 });
    }
    
    return NextResponse.json({ error: 'Failed to add to newsletter' }, { status: 500 });
  }
}
