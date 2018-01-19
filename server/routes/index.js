const cyclejsRouter = require('../services/cyclejs/router');

module.exports = function (app) {

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // add a delay to each request for authentic slowness
    setTimeout(() => {
      next();
    }, 0);
  });

  app.use('/cyclejs', cyclejsRouter);

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
};
