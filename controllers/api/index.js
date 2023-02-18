const router = require('express').Router();
const userRoutes = require('./user-routes');
const playerRoutes = require('./player-routes')
const tableRoutes = require('./table-routes')
const recordRoutes = require('./record-routes')
const dealerRoutes = require('./dealer-routes')
const gameRoutes = require('../game-routes')
router.use('/user', userRoutes);
router.use('/table', tableRoutes);
router.use('/record', recordRoutes);
router.use('/player', playerRoutes);
router.use('/dealer', dealerRoutes)
router.use('/game', gameRoutes);
module.exports = router;
