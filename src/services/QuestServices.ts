import { ContainerType } from 'type-graphql';
import { QuestRepositories } from '../database/repositories/QuestRepositories';
import { Quest } from '../models/Quest';

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