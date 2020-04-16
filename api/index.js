const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3030;


const loggedInUsers = {};

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

let clients = [];

app.get("/eventstream/:userId", (req, res, next) => {
  const {userId} = req.params;
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive"
  });
  const newClient = {
    id: userId,
    res
  };
  clients.push(newClient);
  req.on('close', () => {
    clients = clients.filter(c => c.res !== res);
  });
});

app.on("message", data => {
  for (const client of clients) {
    if (`${data.id}` === `${client.id}`) {
      client.res.write(`data: ${JSON.stringify({isLogin: loggedInUsers[client.id]})}\n\n`);
    }
  }
});

app.post("/login", (req, res, next) => {
  const {id} = req.body;

  loggedInUsers[id] = true;
  app.emit("message", { id });
  res.end();
});

app.post("/logout", (req, res, next) => {
  const {id} = req.body;
  loggedInUsers[id] = false;
  app.emit("message", { id });
  res.end();
});

app.listen(port, () => {
  console.log(`Express listening on port: ${port}`);
});
