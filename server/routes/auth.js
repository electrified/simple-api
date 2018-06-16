const authRouter = require('express').Router()

authRouter.get('/login', (req, res) => {
	// return auth token?
	res.status(200).json({
		userId: 123,
		name: 'Graham',
		balance: 1000,
		lastLogin: new Date(),
	})
})

module.exports = authRouter
