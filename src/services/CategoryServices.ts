import { CategoryRepositories } from '../database/repositories/CategoryRepositories.js';
import { Category } from '../models/Category.js';

export class CategoryServices{
  categoryRepositories: CategoryRepositories;

  constructor(){
    this.categoryRepositories = new CategoryRepositories();
  }

  async getAll(){
    return this.categoryRepositories.findAll();
  }

  async create(data: any){
    return this.categoryRepositories.create(data);
  }

  async update(data: Category){
    return this.categoryRepositories.update(data);
  }

  async delete(code: number){
    return this.categoryRepositories.delete(code);
  }
}