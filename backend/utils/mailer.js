import expressAsyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export const sendMailData = expressAsyncHandler(async (mailTo, body) => {
  const send = await transporter.sendMail({
    from: process.env.EMAIL,
    to: mailTo,
    subject: "TOKOPEDIA Notification",
    text: "Tokopedia App",
    html: `<body>
     <div>
         <div>Hello ${body.name}! ${body.text}</div></br>
             <button><a href="${body.url}">${body.textBtn}</a></button></br>
             <div>Link verify akan expire 1 jam setelah diterima</div>
         <div>
     </body>
     `,
  });
  if (send) {
    console.log("Email has been sent");
  }
});
