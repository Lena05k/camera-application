const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  database: ''
});

module.exports = pool;
