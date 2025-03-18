// Import the necessary modules
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { companyName, month, fileNames } = req.body;

      // Validate that required fields are provided
      if (!companyName || !month) {
        return res
          .status(400)
          .json({ success: false, message: "Missing required fields" });
      }

      // Create a transporter using the SMTP configuration from environment variables
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, // SMTP server host
        port: process.env.SMTP_PORT, // SMTP server port (usually 587 for secure)
        secure: process.env.SMTP_SECURE === "true", // Set whether the connection should be secure (SSL/TLS)
        auth: {
          user: process.env.SMTP_USER, // Your SMTP username (email)
          pass: process.env.SMTP_PASS, // Your SMTP password (application-specific password)
        },
      });

      // Define the email content
      const mailOptions = {
        from: process.env.SMTP_USER, // Use the SMTP user as the sender
        to: process.env.RECIPIENT_EMAIL, // Recipient email (admin)
        subject: "New Document Upload Notification",
        text: `A new document has been uploaded.

        Company Name: ${companyName}
        Month: ${month}
        Files: ${fileNames.join(", ")}

        Please check the system for more details.`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
