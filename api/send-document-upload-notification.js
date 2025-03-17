import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { companyName, month, uploadedFiles, userEmail } = req.body;

  if (!companyName || !month || !uploadedFiles || uploadedFiles.length === 0) {
    return res.status(400).json({ error: "Missing required fields" });
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

    // Construct file list
    const fileLinks = uploadedFiles
      .map((fileUrl) => `<li>${fileUrl}</li>`)
      .join("");

    // Send the email
    await transporter.sendMail({
      from: `"Document Upload" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL, // Business owner
      subject: `Documente încărcate pentru ${companyName} - ${month}`,
      text: `
        Un utilizator (${userEmail}) a încărcat documente pentru firma ${companyName}, luna ${month}.
        Link-uri către fișiere:
        ${uploadedFiles.join("\n")}
      `,
      html: `
        <meta charset="UTF-8">
        <h2>Un utilizator a încărcat documente noi!</h2>
        <p><strong>Firma:</strong> ${companyName}</p>
        <p><strong>Luna:</strong> ${month}</p>
        <p><strong>Email utilizator:</strong> ${userEmail}</p>
        <p><strong>Fișiere:</strong></p>
        <ul>${fileLinks}</ul>
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
