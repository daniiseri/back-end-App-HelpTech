import { connectToMySql } from "../index";
import { encryptPassword } from "../../utils/bcrypt";
import { User } from "../../models/User";
import { NewUserInput } from "../../input/NewUserInput";

export class UserRepositories{
  async findAll(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM user';
    const users = await conn.execute(query);
    return users;
  }

  async findUser(email: string){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM user WHERE email=?';
    const [user] = await conn.execute(query, email);
    return user;
  }

  async findById(code: number){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM user WHERE id = ?';
    const user = await conn.execute(query, [code]);
    return user;
  }

  async create(data: NewUserInput){
    const conn = await connectToMySql();
    const query = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
    const hash = await encryptPassword(data.password);
    const create  = await conn.execute(query, [data.name, data.email, hash]);
    const user = await this.findById(create[0].insertId);
    return user[0];
  }

  async update(data: User){
    const conn = await connectToMySql();
    const query = 'UPDATE user SET name=?, email=?, password=? WHERE id=?';
    const hash = await encryptPassword(data.password);
    await conn.execute(query, [data.name, data.email, hash, data.id]);
    const user = await this.findById(data.id);
    return user[0];
  }

  async delete(code: number){
    const conn = await connectToMySql();
    const query = 'DELETE FROM user WHERE id=?';
    const result = await conn.execute(query, [code]);
    return result;
  }
}