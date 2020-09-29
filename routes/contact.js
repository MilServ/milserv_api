const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
const auth = {
  auth: {
    api_key: `${process.env.MAILGUN_API_KEY}`,
    domain: "sandbox8ba5260dd0324915bfb129bd541e2f59.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, message, cb) => {
  // console.log(name, email + "Inside sendMail");
  const mailOptions = {
    from: "juan.rivera@milserv.com",
    to: "david.jones@acdmilserve.com",
    subject: `Contact form - ${process.env.APP_NAME}`,
    // text: `Email received from Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
    // text: "test worked!!",
    html: `
        <h4>Email received from Contact Form: </h4>
        <p>Sender name: ${name}</p>
        <p>Sender email: ${email}</p>
        <p>Sender message: ${message}</p>
        <hr/>
        <p>This email may contain sensitive information</p>`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
      console.log("Error occurred");
    } else {
      cb(null, data);
      console.log("Message sent");
    }
  });
};

module.exports = sendMail;
