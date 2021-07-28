require("knex");

const { default: knex } = require("knex");
const config = require("./knexfile");

module.exports = knex(config.development)