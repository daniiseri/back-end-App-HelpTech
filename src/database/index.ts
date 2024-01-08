import pg from 'pg';

const { Client } = pg

const connectToPostgres = async()=>{
  const client = new Client(
    {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    }
  );
  
  await client.connect();

  console.log('Database running!');
  
  return client;
}

connectToPostgres()

export default connectToPostgres;