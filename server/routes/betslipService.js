const betslipServiceRouter = require('express').Router()

betslipServiceRouter.post('/place-bet', (req, res) => {
	res.status(200).json({
		success: true,
		stake: parseInt(req.body.stake),
	})
})

module.exports = betslipServiceRouter
