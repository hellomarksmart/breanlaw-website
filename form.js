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
    user: 'docket@remarkable.legal',
    pass: '4h7Q8n--TCgMb'
  }
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
  let mailOptions = {
    from: [contactAddress],
    to: [contactAddress],
    subject: `Email from Breanlaw: ${req.body.mailerState.subject}`,
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

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});