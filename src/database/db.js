const { Pool , Client } = require('pg');
const { config } = require('../configs/db.config');
const pool = new Pool(config);
const client = new Client(config);
module.exports = { client, pool };