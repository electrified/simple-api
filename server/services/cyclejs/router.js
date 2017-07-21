const cyclejsRouter = require('express').Router();

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

module.exports = cyclejsRouter;
