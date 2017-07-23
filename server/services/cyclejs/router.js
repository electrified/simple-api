const cyclejsRouter = require('express').Router();
const calcioTop = require('../../data/skybet/calcio/top/data');

cyclejsRouter.get('/account-details', (req, res) => {
  res.status(200).json({
    loggedIn: true,
    name: 'Graham',
    balance: 1000
  });
});

cyclejsRouter.get('/place-bet', (req, res) => {
  res.status(200).json({
    success: true,
    stake: Math.round(Math.random() * 10),
  });
});

cyclejsRouter.get('/catalog/calcio/top', (req, res) => {
  res.status(200).json(calcioTop);
});

module.exports = cyclejsRouter;
