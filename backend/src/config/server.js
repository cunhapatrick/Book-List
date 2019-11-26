const express = require('express')
const Youch = require('youch')
const validate = require('express-validation')
const cors = require('cors')
class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.database()
    this.middleware()
    this.routes()
    this.exception()
  }

  database () {
    const db = require('./mongoose')
    db.once('open', () => console.log('DATABASE IS ONLINE'))
    db.on('error', err => console.log(err))
  }

  middleware () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  routes () {
    require(`../routes.js`)(this.express)
  }

  exception () {
    // check if error is a validation Object
    this.express.use(async (err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err)
      }

      // if not production use Youch error treatment
      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(err)

        return res.json(await youch.toJSON())
      }

      // general error handler
      return res
        .status(err.status || 500)
        .json({ error: 'Internal Server Error' })
    })
  }
}

module.exports = new App().express
