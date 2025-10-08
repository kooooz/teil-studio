import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.warn('reCAPTCHA secret key not configured');
    return true; // Allow if not configured
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    
    // For reCAPTCHA v3, check score (0.0 - 1.0, where 1.0 is very likely a human)
    // Typical threshold is 0.5
    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

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
    const { email, recaptchaToken } = await request.json();
    
    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Verify reCAPTCHA if token provided
    if (recaptchaToken) {
      const isHuman = await verifyRecaptcha(recaptchaToken);
      if (!isHuman) {
        return NextResponse.json({ error: 'Security verification failed' }, { status: 403 });
      }
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
