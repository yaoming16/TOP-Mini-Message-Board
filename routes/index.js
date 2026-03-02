const { Router } = require("express");
const crypto = require('crypto');

const indexRouter = Router();

const messages = [
  {
    text: "In the middle of the journey of our life, I came to myself, in a dark wood, where the direct way was lost. It is a hard thing to speak of, how wild, harsh and impenetrable that wood was, so that thinking of it recreates the fear. It is scarcely less bitter than death: but, in order to tell of the good that I found there, I must tell of the other things I saw there.",
    user: "Dante Alighieri",
    added: new Date(),
    id: crypto.randomUUID(),
  },
  {
    text: "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing.",
    user: "Miguel de Cervantes",
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
  res.render("card", {message : info})
})

module.exports = indexRouter;
