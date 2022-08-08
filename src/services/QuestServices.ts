import { QuestRepositories } from '../database/repositories/QuestRepositories';

export class QuestServices{
  questRepositories: QuestRepositories;

  constructor(){
    this.questRepositories = new QuestRepositories();
  }

  async getAll(){
    const quests = await this.questRepositories.findAll();

    return quests;
  }
}