const catalogRouter = require('express').Router()
const { getEvents, getCompetitions } = require('../data')

catalogRouter.get('/:sport/:competition/events', (req, res) => {
  const sport = req.params.sport
  const competition = req.params.competition

  res.status(200).json({
    message: 'Sport competition data for ....',
    sport,
    competition,
  })

  return
})

catalogRouter.get('/:sport/events', (req, res) => {
  const sport = req.params.sport
  res.status(200).json(getEvents(sport))
  return
})

catalogRouter.get('/:sport/competitions', (req, res) => {
  const sport = req.params.sport
  res.status(200).json(getCompetitions(sport))
  return
})


module.exports = catalogRouter
