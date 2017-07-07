const cyclejsRouter = require('express').Router();

cyclejsRouter.get('/login', (req, res) => {
  res.status(200).json({
    loggedIn: true,
    name: 'Graham',
    balance: 100
  });
});

cyclejsRouter.get('/bet', (req, res) => {
  res.status(200).json({
    success: true,
    stake: 5,
  });
});

module.exports = cyclejsRouter;
