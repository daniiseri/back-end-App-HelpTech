import { connectToMySql } from "../index";

export class CategoryRepositories{
  async findAll(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM category';
    const categories = await conn.execute(query);
    return categories;
  }
}