const { Client } = require("dogelib");
const app = new Client();

const apiKey = "YOUR NOT API KEY";

app.login(apiKey).then(async () => {
  console.log("Bot connected.");
  app.rooms.join("THE ROOM ID");
});
