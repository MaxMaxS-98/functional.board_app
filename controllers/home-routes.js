
const path = require('path');
const router = require('express').Router();


// const { User } = require('../models');
// const withAuth = require('../utils/auth')
// GET homepage
router.get('/', async (req, res) => {
  try {
      await res.sendFile(path.join(__dirname, '../public/Webpage/index.html'));

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
