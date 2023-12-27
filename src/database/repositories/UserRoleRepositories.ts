import connectToPostgres from '../index.js';

export class UserRoleRepositories{
  async findByUser(code:number){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM user_role WHERE userId=$1';
    const {rows} = await conn.query(query, [code]);
    return rows;
  }
}