import mysql from 'mysql2/promise';
declare const connectToMySql: () => Promise<mysql.Connection>;
export { connectToMySql };
