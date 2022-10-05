import  connectToPostgres  from '../index';

export class RoleRepositories{
  async findById(code:number){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM "role" WHERE id=$1';
    const {rows} = await conn.query(query, [code]);
    return rows;
  }
}