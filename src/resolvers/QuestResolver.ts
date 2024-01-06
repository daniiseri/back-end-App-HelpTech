import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { NewQuestInput } from "../input/NewQuestInput.js";
import { Quest } from "../models/Quest.js";
import { QuestServices } from "../services/QuestServices.js";
import { CategoryServices } from '../services/CategoryServices.js'

@Resolver()
export class QuestResolver {
  questService: QuestServices;
  categoryService: CategoryServices;

  constructor() {
    this.questService = new QuestServices();
    this.categoryService = new CategoryServices();
  }

  @Query(() => Quest)
  async questById(@Arg("idQuest") idQuest: number){
    const quest = await this.questService.getById(idQuest)
    
    return quest
  }

  @Query(() => [Quest])
  async quests() {
    const quests = await this.questService.getAll();
    return quests;
  }

  @Query(() => [Quest])
  async questsByCategory(
    @Arg("categoryId") categoryId: number
  ) {
    const findCategory = await this.categoryService.findById(categoryId);

    if(findCategory.length === 0){
      throw new Error('Category not found')
    }

    const quests = await this.questService.getByCategory(categoryId);

    if(quests.length === 0){
      throw new Error('Quests no associate with this category')
    }

    return quests;
  }

  @Authorized('Admin')
  @Mutation(() => Number)
  async createQuest(
    @Arg("newQuestData") newQuestData: NewQuestInput,
    @Arg("idCategory") idCategory: number
  ) {
    const result = await this.questService.create({ newQuestData, idCategory });
    return result;
  }

  @Authorized('Admin')
  @Mutation(() => Number)
  async updateQuest(
    @Arg("id") id: number,
    @Arg("description") description: string,
    @Arg("idCategory") idcategory: number
  ) {
    const result = await this.questService.update({ id, description, idcategory });
    return result;
  }


  @Authorized('Admin')
  @Mutation(() => Boolean)
  async deleteQuest(
    @Arg("id") id: number
  ) {
    const result = await this.questService.delete(id);
    return result ? true : false;
  }
}