import { connectToMySql } from '../index';

export class RoleRepositories{
  async findById(code:number){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM role WHERE id=?';
    const [role] = await conn.execute(query, [code]);
    return role;
  }
}