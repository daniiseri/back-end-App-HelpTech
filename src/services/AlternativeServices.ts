import { AlternativeRepositories } from '../database/repositories/AlternativeRepositories';

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
}