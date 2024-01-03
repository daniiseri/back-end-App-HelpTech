import { NewUserResponseInput } from '../../input/NewUserResponseInput.js';
import connectToPostgres from '../index.js';

export class UserResponseRepositories{
  async findAll(){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM userResponse';
    const {rows} = await conn.query(query);
    return rows;
  }

  async findById(code: number){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM userResponse WHERE id = $1';
    const {rows} = await conn.query(query, [code]);
    return rows;
  }

  async findByUser(code:number){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM userResponse WHERE idUser = $1';
    const {rows} = await conn.query(query, [code]);
    return rows;
  }

  async create(data: NewUserResponseInput){
    const conn = await connectToPostgres();
    const query = 'INSERT INTO userResponse (idAlternative, idUser) VALUES ($1, $2)';
    const {rowCount} = await conn.query(query, [data.idalternative, data.iduser]);
    return rowCount;
  }

  async update(data: any){
    const conn = await connectToPostgres();
    const query = 'UPDATE userResponse SET idAlternative=$1 WHERE id=$2';
    const {rowCount}  = await conn.query(query, [data.idAlternative, data.id]);
    return rowCount;
  }

  async delete(code:number){
    const conn = await connectToPostgres();
    const query = 'DELETE FROM userResponse WHERE id=$1';
    const {rowCount} = await conn.query(query, [code]);
    return rowCount;
  }
}