const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();
const contactAddress = "docket@remarkable.legal"

// middleware
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  host: 'smtp.migadu.com',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.WORD,
  }
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
  let mailOptions = {
<<<<<<< HEAD
    from: [contactAddress],
    to: [contactAddress],
    subject: `Email from Breanlaw: ${req.body.mailerState.subject}`,
=======
    from: `${req.body.mailerState.email}`,
    to: [contactAddress],
    subject: `Email from Breanlaw.legal: ${req.body.mailerState.subject}`,
>>>>>>> 1da163e (fixed forms)
    text: `${req.body.mailerState.message}`,
    html: `<p>Name: ${req.body.mailerState.FName} ${req.body.mailerState.LName}</p>
    <p>Email: ${req.body.mailerState.email}</p>
    <p>Phone Number: ${req.body.mailerState.phone}</p>
    <p>Message: ${req.body.mailerState.message}</p>
    `
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
});

<<<<<<< HEAD
run().catch(err => console.error(err));
=======
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
>>>>>>> 8c791ef (Form handling (#24))
