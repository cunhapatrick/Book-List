const handle = require('express-async-handler')

const controllers = require('./app/controllers')

// app = express
module.exports = app => {
  app.route('/').get((req, res) => res.send('teste'))

  app
    .route(`/book`)
    .get(handle(controllers.BookController.index))
    .post(handle(controllers.BookController.store))
}
