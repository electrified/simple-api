const accountRouter = require('express').Router()

accountRouter.get('/account-details', (req, res) => {
  res.status(200).json({
    userId: 123,
    name: 'Graham',
    balance: 1000,
  })
})

module.exports = accountRouter
