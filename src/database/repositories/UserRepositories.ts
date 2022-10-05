import connectToPostgres from "../index";
import { encryptPassword } from "../../utils/bcrypt";
import { User } from "../../models/User";
import { NewUserInput } from "../../input/NewUserInput";

export class UserRepositories{
  async findAll(){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM "user"';
    const {rows} = await conn.query(query);
    return rows;
  }

  async findUser(email: string){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM "user" WHERE email=$1';
    const {rows} = await conn.query(query, [email]);
    return rows;
  }

  async findById(code: number){
    const conn = await connectToPostgres();
    const query = 'SELECT * FROM user WHERE id = ?';
    const user = await conn.query(query, [code]);
    return user;
  }

  async create({name, email, password}: NewUserInput){
    const conn = await connectToPostgres();
    const hash = await encryptPassword(password);
    const query = 'INSERT INTO "user" (name, email, password) VALUES ($1, $2, $3)';
    const {rowCount} = await conn.query(query, [name, email, hash]);
    
    return rowCount;
  }

  async update({id, name, email, password}: User){
    const conn = await connectToPostgres();
    const query = 'UPDATE "user" SET name=$1, email=$2, password=$3 WHERE id=$4';
    const hash = await encryptPassword(password);
    const {rowCount} = await conn.query(query, [name, email, hash, id]);
    return rowCount;
  }

  async delete(code: number){
    const conn = await connectToPostgres();
    const query = 'DELETE FROM "user" WHERE id=$1';
    const result = await conn.query(query, [code]);
    return result;
  }
}