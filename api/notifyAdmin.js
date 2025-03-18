import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { fullName, email, phone, company, documentName } = req.body;

  // Ensure company name is provided
  if (!company) {
    return res.status(400).json({ error: "Company name is required" });
  }

  try {
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Document Upload Notification" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Document Uploaded | Name: ${fullName} | Company: ${company}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Document Name: ${documentName}
      `,
      html: `
        <meta charset="UTF-8">
        <h2>A user has uploaded a document. Here are the details:</h2>
        <div><strong>Name:</strong> ${fullName}</div>
        <div><strong>Email:</strong> ${email}</div>
        <div><strong>Phone:</strong> ${phone}</div>
        <div><strong>Company:</strong> ${company}</div>
        <div><strong>Document Name:</strong> ${documentName}</div>
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
