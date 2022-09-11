import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { NewQuestInput } from "../input/NewQuestInput";
import { Quest } from "../models/Quest";
import { ResultSetHeader } from "../models/ResultSetHeader";
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
    return quests;
  }

  @Authorized('admin')
  @Mutation(() => ResultSetHeader)
  async createQuest(
    @Arg("newQuestData") newQuestData: NewQuestInput,
    @Arg("idCategory") idCategory: number
  ){
    const result = await this.questService.create({newQuestData, idCategory});
    return result;
  }

  @Authorized('admin')
  @Mutation(() => ResultSetHeader)
  async updateQuest(
    @Arg("id") id: number,
    @Arg("description") description: string,
    @Arg("idCategory") idCategory: number
  ){
    const result = await this.questService.update({id, description, idCategory});
    return result;
  }

  
  @Authorized('admin')
  @Mutation(() => Boolean)
  async deleteQuest(
    @Arg("id") id: number
  ){
    const result = await this.questService.delete(id);
    return result ? true : false;
  }
}