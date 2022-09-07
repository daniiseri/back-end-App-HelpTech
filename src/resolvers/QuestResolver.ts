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

  @Authorized('admin')
  @Mutation(() => [Quest])
  async updateQuest(
    @Arg("id") id: number,
    @Arg("description") description: string,
    @Arg("idCategory") idCategory: number
  ){
    const quest = await this.questService.update({id, description, idCategory});
    return quest;
  }

  
  @Authorized('admin')
  @Mutation(() => Boolean)
  async deleteQuest(
    @Arg("id") id: number
  ){
    const [result] = await this.questService.delete(id);
    const {affectedRows} = result;
    return affectedRows > 0;
  }
}