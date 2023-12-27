import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { NewQuestInput } from "../input/NewQuestInput.js";
import { Quest } from "../models/Quest.js";
import { QuestServices } from "../services/QuestServices.js";

@Resolver()
export class QuestResolver{
  questService: QuestServices;

  constructor(){
    this.questService = new QuestServices();
  }
  
  @Query(() => [Quest])
  async quests(){
    const quests = await this.questService.getAll();
    return quests;
  }

  @Query(() => [Quest])
  async questsByCategory(
    @Arg("categoryId") categoryId: number
  ){
    const quests = await this.questService.getByCategory(categoryId);
    return quests;
  }

  @Authorized('Admin')
  @Mutation(() => Number)
  async createQuest(
    @Arg("newQuestData") newQuestData: NewQuestInput,
    @Arg("idCategory") idCategory: number
  ){
    const result = await this.questService.create({newQuestData, idCategory});
    return result;
  }

  @Authorized('Admin')
  @Mutation(() => Number)
  async updateQuest(
    @Arg("id") id: number,
    @Arg("description") description: string,
    @Arg("idCategory") idCategory: number
  ){
    const result = await this.questService.update({id, description, idCategory});
    return result;
  }

  
  @Authorized('Admin')
  @Mutation(() => Boolean)
  async deleteQuest(
    @Arg("id") id: number
  ){
    const result = await this.questService.delete(id);
    return result ? true : false;
  }
}