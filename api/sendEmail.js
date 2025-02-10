import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { fullName, email, phone, company, service, message } = req.body;

  // Validate input fields
  if (!fullName || !email || !phone || !company || !service) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Example: smtp.gmail.com
      port: Number(process.env.SMTP_PORT) || 465, // Default to 465 if not specified
      secure: Number(process.env.SMTP_PORT) === 465, // Secure true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`, // Sender
      to: process.env.RECIPIENT_EMAIL, // Email recipient
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Service Requested: ${service}
        Message: ${message || "No message provided"}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || "No message provided"}</p>
      `,
    });

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send email." });
  }
}
