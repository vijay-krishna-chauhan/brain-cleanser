const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'braincleanser908@gmail.com',
    pass: '101820022001'
  }
});

function sendMail(name, email, subject) {
  const mailOptions = {
    from: email,
    to: 'braincleanser908@gmail.com',
    subject: '',
    text: subject ,
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendMail;