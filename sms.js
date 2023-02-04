// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "ACbce97eec7e81d399d90bd5726b4637b2";
const authToken = "833a4d4c932ab5f64350ab3a3a7abdd3";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Here you go",
    from: "+18555751024",
    to: "+14059820806",
  })
  .then((message) => console.log(message.sid));
