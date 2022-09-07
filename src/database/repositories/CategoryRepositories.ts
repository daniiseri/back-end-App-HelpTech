import { Category } from "../../models/Category";
import { connectToMySql } from "../index";

export class CategoryRepositories{
  async findAll(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM category';
    const categories = await conn.execute(query);
    return categories;
  }

  async findById(code: any){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM category WHERE id = ?';
    const category = await conn.execute(query, [code]);
    return category;
  }

  async create(data: any){
    const conn = await connectToMySql();
    const query = 'INSERT INTO category (description) VALUES (?)';
    const create  = await conn.execute(query, [data.description]);
    const category = await this.findById(create[0].insertId);
    
    return category[0];
  }

  async update(data: Category){
    const conn = await connectToMySql();
    const query = 'UPDATE category SET description=? WHERE id=?';
    await conn.execute(query, [data.description, data.id]);
    const category = await this.findById(data.id);
    return category[0];
  }

  async delete(code: number){
    const conn = await connectToMySql();
    const query = 'DELETE FROM category WHERE id=?';
    const result = await conn.execute(query, [code]);
    return result;
  }
}