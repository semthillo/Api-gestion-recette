// import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';

// dotenv.config();

// const pool = mysql.createPool({
//   host: process.env.db_host,
//   user: process.env.db_user,
//   password: process.env.db_password,
//   database: process.env.db_database,
// });
// pool
//   .getConnection()
//   .then(() => console.log('Connected to the database.'))
//   .catch((err) => console.error('Database connection error:', err));

// export default pool;


import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST, // 'db'
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306, // Utilisation du port interne MySQL
});

pool
  .getConnection()
  .then(() => console.log('Connected to the database.'))
  .catch((err) => console.error('Database connection error:', err));

export default pool;
