const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.contactForm = (req, res) => {
  const { email, name, message } = req.body;
  console.log(req.body);

  const emailData = {
    to: process.env.EMAIL_TO,
    // from: email,
    from: process.env.EMAIL_TO,
    subject: `Contact form - ${process.env.APP_NAME}`,
    text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
    html: `
        <h4>Email received from Contact Form: </h4>
        <p>Sender name: ${name}</p>
        <p>Sender email: ${email}</p>
        <p>Sender message: ${message}</p>
        <hr/>
        <p>This email may contain sensitive information</p>`,
  };

  sgMail.send(emailData).then((sent) => {
    return res.json({
      success: true,
    });
  });
};

//   sgMail
//     .send(emailData)
//     .then((sent) => {
//       console.log("Message sent");
//     })
//     .catch((error) => {
//       console.log(error.response.body + emailData);
//       // console.log(error.response.body.errors[0].message + error.response);
//     });
// };

exports.contactMilServAuthorForm = (req, res) => {
  const { authorEmail, email, name, message } = req.body;
  // console.log(req.body)

  let maillist = [authorEmail, process.env.EMAIL_TO];

  const emailData = {
    to: maillist,
    from: email,
    subject: `Someone messaged you from - ${process.env.APP_NAME}`,
    text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
    html: `
        <h4>Message received from: </h4>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <hr/>
        <p>This email may contain sensitive information</p>`,
  };

  sgMail.send(emailData).then((sent) => {
    return res.json({
      success: true,
    });
  });
};
