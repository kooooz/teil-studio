import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

async function sendNewsletterSignup(email: string): Promise<void> {
  try {
    // Create transporter for PrivateEmail
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'mail.privateemail.com',
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // hello@teil.studio
        pass: process.env.EMAIL_PASS, // Email password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hello@teil.studio',
      subject: `New Newsletter Signup - ${email}`,
      html: `
        <h2>New Newsletter Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toISOString()}</p>
        <p><strong>Source:</strong> teil.studio website</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
  } catch (error) {
    console.error('Newsletter email error:', error);
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

    // Send newsletter signup notification email
    await sendNewsletterSignup(email);

    return NextResponse.json({ message: 'Email added to newsletter list' }, { status: 200 });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    
    if (error instanceof Error && error.message === 'Email already subscribed') {
      return NextResponse.json({ error: 'This email is already subscribed' }, { status: 409 });
    }
    
    return NextResponse.json({ error: 'Failed to add to newsletter' }, { status: 500 });
  }
}
