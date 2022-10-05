import { NewQuestInput } from "../input/NewQuestInput";
import { QuestServices } from "../services/QuestServices";
export declare class QuestResolver {
    questService: QuestServices;
    constructor();
    quests(): Promise<any>;
    questsByCategory(categoryId: number): Promise<any>;
    createQuest(newQuestData: NewQuestInput, idCategory: number): Promise<any>;
    updateQuest(id: number, description: string, idCategory: number): Promise<any>;
    deleteQuest(id: number): Promise<boolean>;
}
