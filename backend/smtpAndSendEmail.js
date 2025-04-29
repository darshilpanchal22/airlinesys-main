
const nodemailer = require('nodemailer');

// 1. Setup transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for port 465, false for 587
  auth: {
    user: 'panchaldarshil145@gmail.com',
    pass: 'jzwhiomczlsddbxj',
  },
});

// 2. Verify SMTP Connection
transporter.verify(function (error, success) {
  if (error) {
    console.log('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to send emails.');
  }
});

// 3. Send Email Function
const sendEmail = async (to, subject, text, html, attachments = []) => {
  try {
    const info = await transporter.sendMail({
      from: '"Your Airline" <your_email@example.com>',
      to: to,
      subject: subject,
      text: text,
      html: html,
      attachments: attachments,
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// 4. Example usage

sendEmail(
  'user@example.com', // Recipient
  'Booking Confirmed - Airline Reservation', // Subject
  'Your booking is confirmed. Please find your ticket attached.', // Plain text
  '<h1>Booking Confirmed!</h1><p>Thank you for choosing us. Ticket attached below.</p>', // HTML body
  [
    {
      filename: 'Ticket.pdf', // File name in email
      path: './tickets/Ticket.pdf', // Local path to file
    },
  ]
);

