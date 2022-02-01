const nodemailer = require("nodemailer");

const contactAddress = "docket@remarkable.legal"

const smtpTransport = nodemailer.createTransport({
  host: 'smtp.migadu.com',
  port: 587,
  auth: {
    user: 'docket@remarkable.legal',
    pass: '4h7Q8n--TCgMb'
  }
});

async function run() {
  let sendResult = await smtpTransport.sendMail({
    from: "docket@remarkable.legal",
    to: [contactAddress],
    subject: "Testing - please disregard",
    html: "[No message]",
  })
  console.log(sendResult);
}

run().catch(err => console.error(err));