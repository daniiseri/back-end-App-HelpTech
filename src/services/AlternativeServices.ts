import { ContainerType } from 'type-graphql';
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
}