import { ContainerType } from 'type-graphql';
import { CategoryRepositories } from '../database/repositories/CategoryRepositories';
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
}