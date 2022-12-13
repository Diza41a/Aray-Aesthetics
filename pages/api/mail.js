import config from '../../config.json';
const { EMAIL_FROM, EMAIL_PASS, EMAIL_TO } = config;
const nodemailer = require('nodemailer');
const path = require('path');

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: EMAIL_FROM,
    pass: EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});


export default function handler(req, res) {
  const { username, inquiry, phone = 'none', email = 'none' } = req.body;

  const mailOptions = {
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: 'New Inquiry',
    text: `Name: ${username};
    Email: ${email};
    Phone: ${phone};
    Inquiry: ${inquiry};
    `,
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log(err);
      res.status(err.responseCode).send(err.response);
    } else {
      console.log('Message sent!');
      res.status(200).end();
    }
  });
}
