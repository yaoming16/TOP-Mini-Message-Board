const { Router } = require("express");
const crypto = require('crypto');

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: crypto.randomUUID(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: crypto.randomUUID(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", {});
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
    id: crypto.randomUUID(),
  });

  res.redirect("/");
});

indexRouter.get("/:id/card", (req, res) => {
  const idToFind = req.params.id;
  const info = messages.find((message) => message.id === idToFind);
  console.log(info);
  res.render("card", {message : info})
})

module.exports = indexRouter;
