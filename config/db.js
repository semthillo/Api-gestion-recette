
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database
});
pool.getConnection()
    .then(() => console.log("Connected to the database."))
    .catch(err => console.error("Database connection error:", err));

export default pool;

