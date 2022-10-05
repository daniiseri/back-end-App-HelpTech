import { Client } from 'pg';


const connectToPostgres = async()=>{
  const client = new Client(
    {
      connectionString: process.env.DATABASE_URL
    }
  );
  
  await client.connect();

  console.log('Database running!');
  
  return client;
}

connectToPostgres()

export default connectToPostgres;