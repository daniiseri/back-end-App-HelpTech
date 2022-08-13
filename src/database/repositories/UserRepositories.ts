import { connectToMySql } from "../index";

export class UserRepositories{
  async findAll(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM user';
    const users = await conn.execute(query);
    return users;
  }

  async findById(code: number){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM user WHERE id = ?';
    const user = await conn.execute(query, [code]);
    return user;
  }

  async create(data: any){
    const conn = await connectToMySql();
    const query = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
    const create  = await conn.execute(query, [data.name, data.email, data.password]);
    const user = await this.findById(create[0].insertId);
    return user[0];
  }
}