import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );    }

    // Create transporter (using Gmail as example - you can change this)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Email content for you (to receive messages)
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email to receive messages
      subject: `New Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2C3E50;">New Contact Form Submission</h2>
          <div style="background-color: #ECF0F1; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #34495E; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #7F8C8D;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #7F8C8D; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        This message was sent from your portfolio contact form.
      `,
    };

    // Auto-reply email to the sender
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2C3E50;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <div style="background-color: #ECF0F1; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
            <p>Here's a copy of your message:</p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #7F8C8D;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p>Best regards,<br>
          <strong>Ishfaque Kunais</strong></p>
          <p style="color: #7F8C8D; font-size: 14px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `,
      text: `
        Hi ${name},
        
        Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.
        
        Here's a copy of your message:
        ${message}
        
        Best regards,
        Ishfaque Kunais
        
        This is an automated response. Please do not reply to this email.
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(mailOptionsToSender);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
