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
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Solicitare Formular Noua de la ${fullName}`,
      text: `
        Nume: ${fullName}
        Adresă de email: ${email}
        Telefon: ${phone}
        Societate: ${company}
        Tipul serviciului: ${service}
        Mesaj: ${message || "Fără mesaj"}
      `,
      html: `
        <h2>Solicitare Formular Nouă</h2>
        <p><strong>Nume:</strong> ${fullName}</p>
        <p><strong>Adresă de email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Societate:</strong> ${company}</p>
        <p><strong>Tipul serviciului:</strong> ${service}</p>
        <p><strong>Mesaj:</strong> ${message || "Fără mesaj"}</p>
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
