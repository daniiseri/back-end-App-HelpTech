import { Client } from 'pg';
declare const connectToPostgres: () => Promise<Client>;
export default connectToPostgres;
