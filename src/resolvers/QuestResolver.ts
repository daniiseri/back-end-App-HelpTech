import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { NewQuestInput } from "../input/NewQuestInput";
import { Quest } from "../models/Quest";
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

  @Authorized('admin')
  @Mutation(() => [Quest])
  async createQuest(
    @Arg("newQuestData") newQuestData: NewQuestInput,
    @Arg("idCategory") idCategory: number
  ){
    const newQuest = await this.questService.create({newQuestData, idCategory});
    return newQuest;
  }
}