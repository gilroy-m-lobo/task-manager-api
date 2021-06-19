/* const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'gilroymlobo@gmail.com',
    from: 'andrew@mead.io',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})*/

/* const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey);
const msg = {
  to: 'gilroymlobo@gmail.com',
  from: 'andrew@mead.io',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
};

(async () => {
  try {
    await sgMail.send(msg);
  } catch (err) {
    console.error(err.toString());
  }
})(); */

/* const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andrew@mead.io',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
} */

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gilroynodejs@gmail.com',
      pass: process.env.GMAIL_PW
    }
  });

const sendWelcomeEmail = (email, name) => {
const mailOptions = {
  from: 'gilroynodejs@gmail.com',
  to: email,
  subject: 'Thanks for joining in!',
  text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    //console.log(error);
  } else {
    //console.log('Email sent: ' + info.response);
  }
});

}

const sendCancelationEmail = (email, name) => {

    const mailOptions = {
        from: 'gilroynodejs@gmail.com',
        to: email,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          //console.log(error);
        } else {
         // console.log('Email sent: ' + info.response);
        }
      });
      
   
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
