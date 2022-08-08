import { ContainerType } from 'type-graphql';
import { MergeCategoryRepositories } from '../database/repositories/MergeCategoryRepositories';
import { MergeCategory } from '../models/MergeCategory';

export class MergeCategoryServices{
  mergeCategoryRepositories: MergeCategoryRepositories;

  constructor(){
    this.mergeCategoryRepositories = new MergeCategoryRepositories();
  }

  async getAll(){
    const mergeCategories = await this.mergeCategoryRepositories.findAll();

    return mergeCategories;
  }
}