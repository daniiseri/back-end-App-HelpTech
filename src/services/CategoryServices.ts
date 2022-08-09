import { CategoryRepositories } from '../database/repositories/CategoryRepositories';
import { NewCategoryInput } from '../input/NewCategoryInput';
import { Category } from '../models/Category';

export class CategoryServices{
  categoryRepositories: CategoryRepositories;

  constructor(){
    this.categoryRepositories = new CategoryRepositories();
  }

  async getAll(){
    const categories = await this.categoryRepositories.findAll();

    return categories;
  }

  async create(data: any){
    const newCategory = await this.categoryRepositories.create(data);

    return newCategory;
  }
  
}