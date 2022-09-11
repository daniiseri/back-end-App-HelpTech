import { NewUserResponseInput } from '../../input/NewUserResponseInput';
import { UserResponse } from '../../models/UserResponse';
import { connectToMySql } from '../index';

export class UserResponseRepositories{
  async findAll(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM user_response';
    const [userReponses] = await conn.execute(query);
    return userReponses;
  }

  async findById(code: number){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM user_response WHERE id = ?';
    const [userReponse] = await conn.execute(query, [code]);
    return userReponse;
  }

  async findByUser(code:number){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM user_response WHERE idUser = ?';
    const [userReponse] = await conn.execute(query, [code]);
    return userReponse;
  }

  async create(data: NewUserResponseInput){
    const conn = await connectToMySql();
    const query = 'INSERT INTO user_response (idAlternative, idUser) VALUES (?, ?)';
    const [result] = await conn.execute(query, [data.idAlternative, data.idUser]);
    return result;
  }

  async update(data: any){
    const conn = await connectToMySql();
    const query = 'UPDATE user_response SET idAlternative=? WHERE id=?';
    const [result]  = await conn.execute(query, [data.idAlternative, data.id]);
    return result;
  }

  async delete(code:number){
    const conn = await connectToMySql();
    const query = 'DELETE FROM user_response WHERE id=?';
    const [result] = await conn.execute(query, [code]);
    return result;
  }
}