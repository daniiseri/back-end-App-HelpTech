import { Args, Mutation, Query, Resolver } from "type-graphql";
import { Quest } from "../models/Quest";
import { QuestArgs } from "../args/QuestArgs";
import { QuestServices } from "../services/QuestServices";

@Resolver()
export class QuestResolver{
  questService: QuestServices;

  constructor(){
    this.questService = new QuestServices();
  }

  @Query(() => [Quest])
  async quests(){
    const quests = await this.questService.getAll();
    return quests[0];
  }

  @Mutation(() => Quest)
  async createQuest(){
    
  }
}