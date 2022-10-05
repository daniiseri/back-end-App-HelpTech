import { NewUserResponseInput } from '../../input/NewUserResponseInput';
import connectToPostgres from '../index';

export class UserResponseRepositories{
  async findAll(){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM user_response';
    const {rows} = await conn.query(query);
    return rows;
  }

  async findById(code: number){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM user_response WHERE id = $1';
    const {rows} = await conn.query(query, [code]);
    return rows;
  }

  async findByUser(code:number){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM user_response WHERE idUser = $1';
    const {rows} = await conn.query(query, [code]);
    return rows;
  }

  async create(data: NewUserResponseInput){
    const conn = await connectToPostgres();
    const query = 'INSERT INTO user_response (idAlternative, idUser) VALUES ($1, $2)';
    const {rowCount} = await conn.query(query, [data.idAlternative, data.idUser]);
    return rowCount;
  }

  async update(data: any){
    const conn = await connectToPostgres();
    const query = 'UPDATE user_response SET idAlternative=$1 WHERE id=$2';
    const {rowCount}  = await conn.query(query, [data.idAlternative, data.id]);
    return rowCount;
  }

  async delete(code:number){
    const conn = await connectToPostgres();
    const query = 'DELETE FROM user_response WHERE id=$1';
    const {rowCount} = await conn.query(query, [code]);
    return rowCount;
  }
}