const router = require('express').Router();
const { User, Record, Player } = require('../../models');


// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create(req.body);
    const dbRecordData = await Record.create(
      {
        user_id: dbUserData.id
      })
    const dbPlayerData = await Player.create(
      {
        user_id: dbUserData.id
      });
      
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({ dbUserData,dbPlayerData, dbRecordData });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all users
router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      attributes: ['id', 'username'],
      include: [
        {
          model: Record,
          attributes: ['games_played', 'games_won', 'max_profit']
        },
      ],
    })
    const users = dbUserData.map((user) =>
      user.get({ plain: true })
    );
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user by id
router.get('/:id', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'username'],
      include: [
        {
          model: Record,
          attributes: ['games_played', 'games_won', 'max_profit']
        },
      ],
    });

    if (!dbUserData) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(dbUserData.get({ plain: true }));
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a user by id
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser.get({ plain: true }));
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete an user by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.destroy({
      where: { id: req.params.id }
    });

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(dbUserData)
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);
    console.log(validPassword)
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
