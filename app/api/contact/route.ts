import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

async function verifyRecaptcha(token: string) {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, message, recaptchaToken } = await req.json();

    // Validate the input
    if (!name || !email || !message || !recaptchaToken) {
      return NextResponse.json(
        { error: 'Please fill in all fields and complete the reCAPTCHA verification' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: 'Invalid reCAPTCHA verification' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Prepare the email
    const msg = {
      to: 'nanuvalasiddartha09@gmail.com',
      from: 'nanuvalasiddartha09@gmail.com', // Verified sender email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Handle specific SendGrid errors
    if (error.response) {
      const { body } = error.response;
      return NextResponse.json(
        { error: body.errors?.[0]?.message || 'Failed to send email' },
        { status: error.response.status }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

// Add a GET endpoint to fetch messages (protected)
export async function GET(req: Request) {
  try {
    // Add authentication check here if needed
    await connectDB();
    
    const messages = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(50);

    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
} 