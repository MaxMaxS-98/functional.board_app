const path = require('path');
const express = require('express');
const { User, Record, Player, Dealer, Table } = require('./models')
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const routes = require('./controllers');
const sequelize = require('./config/connection');
const { Model } = require('sequelize');
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

// const hbs = exphbs.create({ helpers });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(routes);
// A sample get request handler to test the models
app.get('/api/users', async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      attributes: ['user_id', 'username'],
      include: [
        { model: Stats },
      ],
    })
    const users = dbUserData.map((user) =>
      user.get({ plain: true })
    );
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/table', async (req, res) => {
  try {
    const dbTableData = await Table.findAll({
      include: [
        { model: Dealer },
        {model: Player}
      ],
    })
    const tables = dbTableData.map((table) =>
      table.get({ plain: true })
    );
    res.status(200).json(tables)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
