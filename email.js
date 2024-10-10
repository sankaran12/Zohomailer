const nodemailer = require("nodemailer");

const email = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true,
    auth: {
      user: "hello@npng.in",
     pass: "9iFL wwy0 K10X",
    },
  });

  const mailOptions = {
    from: "hello@npng.in",
    to: "hello@npng.in",
    subject: "This Mail From Contect us Page",
    html: `<p>Name: ${req.name ? req.name : ""}</p> <p>Phone: ${req.phone ? req.phone : ""} </p> <p>Email: ${req.email ? req.email : ""} </p><p>Service: ${req.service ? req.service : ""}</p> <p>Message: ${req.message}</p> `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};


const email1 = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true,
    auth: {
      user: "hello@npng.in",
     pass: "9iFL wwy0 K10X",
    },
  });

  const mailOptions = {
    from: "hello@npng.in",
    to: "hello@npng.in",
    subject: "This Mail From NPNG Tech website",
    html: `<p>Name: ${req.message.name ? req.message.name : ""}</p> <p>Phone: ${req.message.phone ? req.message.phone : ""} </p> <p>Email: ${req.message.email ? req.message.email : ""} </p><p>Message: ${req.message.message}</p> `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};


const email2 = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true,
    auth: {
      user: "hello@npng.in",
     pass: "9iFL wwy0 K10X",
    },
  });

  const mailOptions = {
    from: "hello@npng.in",
    to: "hello@npng.in",
    subject: "This Mail From Profolio website",
    html: `<p>Name: ${req.name ? req.name : ""}</p>  <p>Email: ${req.email ? req.email : ""} </p><p>Message: ${req.message ? req.message : ""}</p> `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { email, email1, email2 };
