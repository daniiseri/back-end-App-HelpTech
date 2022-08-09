import { QuestRepositories } from '../database/repositories/QuestRepositories';
import { NewQuestInput } from '../input/NewQuestInput';
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

  async create(data: any){
    const newQuest = await this.questRepositories.create(data);

    return newQuest;
  }
}