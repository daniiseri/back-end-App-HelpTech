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
}