import { QuestRepositories } from '../database/repositories/QuestRepositories';
import { NewQuestInput } from '../input/NewQuestInput';
import { Quest } from '../models/Quest';

export class QuestServices{
  questRepositories: QuestRepositories;

  constructor(){
    this.questRepositories = new QuestRepositories();
  }

  async getAll(){
    return this.questRepositories.findAll();
  }

  async getByCategory(code: number){
    return this.questRepositories.findByCategory(code);
  }

  async create(data: any){
    return this.questRepositories.create(data);
  }

  async update(data: Quest){
    return this.questRepositories.update(data);
  }

  async delete(code: number){
    return this.questRepositories.delete(code);
  }
}