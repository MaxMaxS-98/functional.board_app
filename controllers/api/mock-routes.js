const path = require("path");
const router = require("express").Router();

const cards = JSON.parse(
  `[{"id":"c1","html":{"string":"<div class='card ace hearts' id=c1></div>"},"name":"Ace","suit":"Hearts","value":1,"facedown":false,"img_path":"./assets/images/cards/ace_of_hearts.png"},{"id":"c2","html":{"string":"<div class='card 2 hearts' id=c2></div>"},"name":"2","suit":"Hearts","value":2,"facedown":false,"img_path":"../../assets/images/cards/2_of_hearts.png"},{"id":"c3","html":{"string":"<div class='card 3 hearts' id=c3></div>"},"name":"3","suit":"Hearts","value":3,"facedown":false,"img_path":"../../assets/images/cards/3_of_hearts.png"},{"id":"c4","html":{"string":"<div class='card 4 hearts' id=c4></div>"},"name":"4","suit":"Hearts","value":4,"facedown":false,"img_path":"../../assets/images/cards/4_of_hearts.png"},{"id":"c5","html":{"string":"<div class='card 5 hearts' id=c5></div>"},"name":"5","suit":"Hearts","value":5,"facedown":false,"img_path":"../../assets/images/cards/5_of_hearts.png"}]`
);

// const { User } = require('../models');
// const withAuth = require('../utils/auth')
// GET homepage
router.get("/", async (req, res) => {
  try {
    await res.sendFile(path.join(__dirname, "../public/index.html"));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.sendFile(path.join(__dirname, "../public/login.html"));
});
// router.get("/mock", (req, res) => {
//     res.sendFile(path.join(__dirname, '../views/mock.html'));
//   console.log(cards);
//   res.render("player-hand-template", { cards });
  
// });

// Set up a route for the mock.html file
app.get('/mock', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/mock.html'));

  router.get("/mock", (req, res) => {
    console.log(cards);
    res.render("player-hand-template", { cards });
  });
  });

  // Set up a route for the player-hand-template.handlebars file
  app.get('/player-hand-template', (req, res) => {
    res.render('player-hand-template');
  });
module.exports = router;
