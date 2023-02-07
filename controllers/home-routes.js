const router = require('express').Router();
const { Post, User } = require('../models');
// TODO: Import the custom middleware
const withAuth = require('../utils/auth')
// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = dbPostData.map((Post) =>
      Post.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Post
// TODO: Replace the logic below with the custom middleware
router.get('/post/:id', withAuth, async (req, res) => {
  
    // If the user is logged in, allow them to view the Post
    try {
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: {
              exclude: ['password']
            },
          },
        ],
      });
      const post = dbPostData.get({ plain: true });
      res.render('post', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  
});

// GET one painting
// TODO: Replace the logic below with the custom middleware
router.get('/painting/:id', withAuth, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  
    // If the user is logged in, allow them to view the painting
    try {
      const dbPaintingData = await Painting.findByPk(req.params.id);

      const painting = dbPaintingData.get({ plain: true });

      res.render('painting', { painting, loggedIn: req.session.loggedIn });
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
