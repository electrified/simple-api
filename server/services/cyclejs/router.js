const cyclejsRouter = require('express').Router();
const calcioTop = require('../../data/calcio-top');
const tennisTop = require('../../data/tennis-top');
const basketTop = require('../../data/basket-top');

cyclejsRouter.get('/account-details', (req, res) => {
  res.status(200).json({
    loggedIn: true,
    name: 'Graham',
    balance: 1000,
    lastLogin: '22/08/2017 14:32',
  });
});

cyclejsRouter.post('/place-bet', (req, res) => {
  res.status(200).json({
    success: true,
    stake: parseInt(req.body.stake),
  });
});

cyclejsRouter.get('/catalog/calcio/top', (req, res) => {
  res.status(200).json(calcioTop);
});

cyclejsRouter.get('/catalog/tennis/top', (req, res) => {
  res.status(200).json(tennisTop);
});

cyclejsRouter.get('/catalog/basket/top', (req, res) => {
  res.status(200).json(basketTop);
});

module.exports = cyclejsRouter;
