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

app.get("/eventstream/:userId", (req, res, next) => {
  const {userId} = req.body;
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive"
  });
  app.on("message", data => {
    console.log(`data: ${JSON.stringify(data)}\n\n`, data.id == userId);
    if (data.id == userId) {
      res.write({id: loggedInUsers[userId]});
    }
  });
});

app.post("/login", (req, res, next) => {
  const {id} = req.body;

  app.emit("message", { id });
  console.log('login', id);
  loggedInUsers[id] = true;
  res.end();
});

app.post("/logout", (req, res, next) => {
  const {id} = req.body;
  console.log('logout', id);
  app.emit("message", { id });
  loggedInUsers[id] = false;
  res.end();
});

app.listen(port, () => {
  console.log(`Express listening on port: ${port}`);
});
