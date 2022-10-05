import { Client } from 'pg';


const connectToPostgres = async()=>{
  const client = new Client(
    {
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      port: Number(process.env.PGPORT),
      password: process.env.PGPASSWORD,
    }
  );

  await client.connect();

  console.log('Database running!');
  
  return client
}

connectToPostgres()

export default connectToPostgres;