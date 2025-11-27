import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, human } = await req.json();

    // HUMAN VERIFICATION
    if (human.trim() !== "5") {
      return Response.json(
        { success: false, error: "Verificarea umană a eșuat." },
        { status: 400 }
      );
    }

    // CONFIGUREAZĂ TRANSPORTUL
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.CONTACT_EMAIL}>`,
      to: `<${process.env.CONTACT_EMAIL}>`, 
      subject: "Mesaj nou de pe site",
      text: `
Nume: ${name}
Email: ${email}
Mesaj:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Eroare email:", err);
    return Response.json(
      { success: false, error: "Eroare server la trimiterea emailului." },
      { status: 500 }
    );
  }
}
