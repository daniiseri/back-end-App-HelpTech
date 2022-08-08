import mysql from 'mysql2/promise';
import bluebird from 'bluebird';

const connectToMySql = async ()=>{
  const connection = await mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    database: 'help_tech', 
    password: process.env.DB_PASSWORD,
    Promise: bluebird
  });

  console.log('Database running');
  return connection;
}

connectToMySql();

export { connectToMySql };