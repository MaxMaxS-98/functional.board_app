const router = require('express').Router();
const gameRoutes = require('./game-routes')
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/game', gameRoutes);

module.exports = router;
