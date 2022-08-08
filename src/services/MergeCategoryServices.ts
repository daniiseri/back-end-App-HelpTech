import { MergeCategoryRepositories } from '../database/repositories/MergeCategoryRepositories';

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