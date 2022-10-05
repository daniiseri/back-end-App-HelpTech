import { Pool } from 'pg';


const connectToPostgres = async()=>{
  const pool = new Pool(
    {
      connectionString: process.env.POSTGRES_URL
    }
  );
  return pool
}

connectToPostgres()

export default connectToPostgres;