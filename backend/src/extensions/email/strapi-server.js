export default {
  provider: 'nodemailer',
  providerOptions: {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  },
  settings: {
    defaultFrom: process.env.SMTP_FROM,
    defaultReplyTo: process.env.SMTP_FROM,
  },
};
