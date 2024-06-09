require('dotenv').config()


const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'flight_system'
    }
});

// Test the connection
// knex.raw('SELECT 1+1 as result').then(() => {
//     console.log('Connected to MySQL database!');
// }).catch((err) => {
//     console.error('Error connecting to MySQL database:', err);
// });

module.exports = { knex };