const catalogRouter = require('../routes/catalog')
const accountRouter = require('../routes/account')
const authRouter = require('../routes/auth')
const betslipServiceRouter = require('../routes/betslipService')

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*")
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

		// add a delay to each request for authentic slowness
		setTimeout(() => {
			next()
		}, 0)
	})

	// disallow all but 3 sports for which we have data via middleware
	app.use('/catalog', function (req, res, next) {
		const urlSegments = req.originalUrl.split('/')

		if (!urlSegments || urlSegments.length < 3 ||
			['calcio', 'tennis', 'basket', 'rugby'].indexOf(urlSegments[2]) < 0) {
			res.sendStatus(404)
			return
		}

		next()
	}, catalogRouter)

	app.use('/account', accountRouter)
	app.use('/auth', authRouter)
	app.use('/betslip-service', betslipServiceRouter)

	app.use('*', (req, res) => {
		res.sendStatus(404)
	})
}
