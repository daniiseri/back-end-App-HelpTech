import { AlternativeRepositories } from '../database/repositories/AlternativeRepositories';
import { Alternative } from '../models/Alternative';

export class AlternativeServices{
  alternativeRepositories: AlternativeRepositories;

  constructor(){
    this.alternativeRepositories = new AlternativeRepositories();
  }

  async getAll(){
    const alternatives = await this.alternativeRepositories.findAll();

    return alternatives;
  }

  async create(data: any){
    return this.alternativeRepositories.create(data);
  }

  async update(data: Alternative){
    return this.alternativeRepositories.update(data);
  }

  async delete(code: number){
    const result = await this.alternativeRepositories.delete(code);
    return result;
  }
}