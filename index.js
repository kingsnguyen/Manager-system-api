// index.js

/**
 * Required External Modules
 */
const express = require("express")
const path = require("path")
const nnn = require("nnn-router")
const bodyParser = require("body-parser")
/**
 * App Variables
 */
const app = express()
const port = process.env.PORT || "8000"
const options = {
  routeDir: "/routes", // DEFAULT '/routes'
}
/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(nnn(options))

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
})
