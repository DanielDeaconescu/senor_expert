import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { companyName, month, fileNames } = req.body;

  if (!companyName || !month || !fileNames || fileNames.length === 0) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  console.log({ companyName, month, fileNames });

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email to the admin
    await transporter.sendMail({
      from: `"Upload Notification" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL, // Set this in your environment variables
      subject: `New Documents Uploaded - ${companyName}`,
      text: `
        A new document upload has been completed.
        
        Company: ${companyName}
        Month: ${month}
        Files:
        ${fileNames.map((file) => `- ${file}`).join("\n")}
      `,
      html: `
        <h2>New Documents Uploaded</h2>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Month:</strong> ${month}</p>
        <p><strong>Files:</strong></p>
        <ul>
          ${fileNames.map((file) => `<li>${file}</li>`).join("")}
        </ul>
      `,
    });

    return res
      .status(200)
      .json({ success: true, message: "Email sent to admin!" });
  } catch (error) {
    console.error("Email send error:", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send email." });
  }
}
