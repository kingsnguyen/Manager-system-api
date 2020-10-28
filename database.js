const config =  require('./.env.json')
const connection = {
    user: config.mysql.user,
    host: config.mysql.host,
    password: config.mysql.password,
    database: config.mysql.database,
    charset: 'utf8'
}
const knex = require("knex")({
  client: "mysql",
  connection
})
module.exports = knex
