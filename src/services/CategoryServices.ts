import { CategoryRepositories } from '../database/repositories/CategoryRepositories';

export class CategoryServices{
  categoryRepositories: CategoryRepositories;

  constructor(){
    this.categoryRepositories = new CategoryRepositories();
  }

  async getAll(){
    const categories = await this.categoryRepositories.findAll();

    return categories;
  }
}