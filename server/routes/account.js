const accountRouter = require('express').Router()

accountRouter.get('/account-details', (req, res) => {
	res.status(200).json({
		userId: 123,
		name: 'Graham',
		balance: {
			sportsbook: 985.00,
			casino: 125.00,
		},
		bonus: {
			sportsbook: 10.00,
			casino: 50.00,
		},
	})
})

accountRouter.get('/login', (req, res) => {
	res.status(200).json({
		jwt: 'whatever',
	})
})

module.exports = accountRouter
