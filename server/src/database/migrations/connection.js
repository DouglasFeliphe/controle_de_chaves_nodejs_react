const knex = require('knex')
const configuration = require('../../knexcode')
const connection = knex(configuration.development)
module.exports = connection