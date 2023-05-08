const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const configs = require('./configEmail');

const mg = mailgun.client({
  apiKey: configs.apiKey,
  domain: configs.domain
});

function sendEmail(to, subject, text) {
  const data = {
    from: configs.from,
    to,
    subject,
    text
  };

  mg.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
    } else {
      console.log(body);
    }
  });
}

module.exports = sendEmail;
