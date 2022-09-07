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
    const newAlternative = await this.alternativeRepositories.create(data);
    return newAlternative;
  }

  async update(data: Alternative){
    const alternative = await this.alternativeRepositories.update(data);
    return alternative;
  }

  async delete(code: number){
    const result = await this.alternativeRepositories.delete(code);
    return result;
  }
}