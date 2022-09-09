import { NewUserResponseInput } from '../../input/NewUserResponseInput';
import { connectToMySql } from '../index';

export class UserResponseRepositories{
  async findAll(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM user_response';
    const userReponses = await conn.execute(query);
    return userReponses;
  }

  async findById(code: number){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM user_response WHERE id = ?';
    const userReponse = await conn.execute(query, [code]);
    return userReponse;
  }

  async findByUser(code:number){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM user_response WHERE idUser = ?';
    const userReponse = await conn.execute(query, [code]);
    return userReponse;
  }

  async create(data: NewUserResponseInput){
    const conn = await connectToMySql();
    const query = 'INSERT INTO user_response (idAlternative, idUser) VALUES (?, ?)';
    const create = await conn.execute(query, [data.idAlternative, data.idUser]);
    const userResponse = await this.findById(create[0].insertId);
    return userResponse[0];
  }
}