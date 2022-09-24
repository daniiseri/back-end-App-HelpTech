import { connectToMySql } from '../index';

export class UserRoleRepositories{
  async findByUser(code:number){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM user_role WHERE userId=?';
    const [userRole] = await conn.execute(query, [code]);
    return userRole;
  }
}