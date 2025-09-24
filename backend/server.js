const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

// app.post('/send-email', async (req, res) => {
//   const { fullName, email, selectedReasons, budget, notes } = req.body;

//   // Setup transporter (gunakan akun Gmail atau SMTP lain)
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'mindlezz7@gmail.com', // Ganti dengan email kamu
//       pass: 'sirb txub djzj qsgh', // Ganti dengan password atau app password
//     },
//   });

//   const mailOptions = {
//     from: 'mindlezz7@gmail.com',
//     to: 'kpferdy@gmail.com',
//     subject: `New Contact Form Submission from ${fullName}`,
//     text: `
//       Full Name: ${fullName}
//       Email: ${email}
//       Reasons: ${selectedReasons.join(', ')}
//       Budget: IDR ${budget.min} - IDR ${budget.max}
//       Notes: ${notes}
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Email error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error sending email',
//       error: error.message,
//     });
//   }
// });

app.post('/send-email', async (req, res) => {
  const {
    fullName,
    email,
    selectedReasons = [],
    budget = { min: 0, max: 0 },
    notes = '',
  } = req.body;

  // Setup transporter (gunakan akun Gmail atau SMTP lain)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mindlezz7@gmail.com', // Ganti dengan email kamu
      pass: 'sirb txub djzj qsgh', // Ganti dengan password atau app password
    },
  });

  const mailOptions = {
    from: 'mindlezz7@gmail.com',
    to: 'kpferdy@gmail.com',
    subject: `New Contact Form Submission from ${fullName || 'Anonymous'}`,
    text: `
      Full Name: ${fullName || 'N/A'}
      Email: ${email || 'N/A'}
      Reasons: ${selectedReasons.length ? selectedReasons.join(', ') : 'N/A'}
      Budget: IDR ${budget.min} - IDR ${budget.max}
      Notes: ${notes || 'N/A'}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({
      success: false,
      message: 'Error sending email',
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
