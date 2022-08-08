import { connectToMySql } from "../index";

export class MergeCategoryRepositories{
  async findAll(){
    const conn = await connectToMySql();
    const query = 'SELECT * FROM mergeCategory';
    const mergeCategories = await conn.execute(query);
    return mergeCategories;
  }
}