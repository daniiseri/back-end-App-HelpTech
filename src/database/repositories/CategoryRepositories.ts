import { Category } from "../../models/Category";
import { connectToMySql } from "../index";

export class CategoryRepositories{
  async findAll(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM category';
    const [categories] = await conn.execute(query);
    return categories;
  }

  async findById(code: any){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM category WHERE id = ?';
    const [category] = await conn.execute(query, [code]);
    return category;
  }

  async create(data: any){
    const conn = await connectToMySql();
    const query = 'INSERT INTO category (description) VALUES (?)';
    const [result]  = await conn.execute(query, [data.description]);
    return result;
  }

  async update(data: Category){
    const conn = await connectToMySql();
    const query = 'UPDATE category SET description=? WHERE id=?';
    const [result] = await conn.execute(query, [data.description, data.id]);
    return result;
  }

  async delete(code: number){
    const conn = await connectToMySql();
    const query = 'DELETE FROM category WHERE id=?';
    const [result] = await conn.execute(query, [code]);
    return result;
  }
}