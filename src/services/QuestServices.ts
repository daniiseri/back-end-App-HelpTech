import { QuestRepositories } from '../database/repositories/QuestRepositories.js';
import { Quest } from '../models/Quest.js';

export class QuestServices {
  questRepositories: QuestRepositories;

  constructor() {
    this.questRepositories = new QuestRepositories();
  }

  async getById(idQuest: number) {
    return this.questRepositories.findById(idQuest)
  }

  async getAll() {
    return this.questRepositories.findAll();
  }

  async getByCategory(code: number) {
    return this.questRepositories.findByCategory(code);
  }

  async create(data: any) {
    return this.questRepositories.create(data);
  }

  async update(data: Quest) {
    return this.questRepositories.update(data);
  }

  async delete(code: number) {
    return this.questRepositories.delete(code);
  }
}