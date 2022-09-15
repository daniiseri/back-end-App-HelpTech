import { AlternativeRepositories } from '../database/repositories/AlternativeRepositories';
import { Alternative } from '../models/Alternative';

export class AlternativeServices{
  alternativeRepositories: AlternativeRepositories;

  constructor(){
    this.alternativeRepositories = new AlternativeRepositories();
  }

  async getAll(){
    return this.alternativeRepositories.findAll();
  }

  async getByQuest(code: number){
    return this.alternativeRepositories.findByQuest(code);
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