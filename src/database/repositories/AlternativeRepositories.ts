import { connectToMySql } from "../index";

export class AlternativeRepositories{
  async findAll(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM alternative';
    const alternatives = await conn.execute(query);
    return alternatives;
  }
}