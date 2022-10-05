import { NewAlternativeInput } from "../input/NewAlternativeInput";
import { AlternativeServices } from "../services/AlternativeServices";
export declare class AlternativeResolver {
    alternativeServices: AlternativeServices;
    constructor();
    alternatives(): Promise<any>;
    alternativesByQuest(questId: number): Promise<any[]>;
    createAlternative(newAlternativeData: NewAlternativeInput, idCategory: number, idQuest: number): Promise<number>;
    updateAlternative(id: number, description: string, level: number, idCategory: number, idQuest: number): Promise<number>;
    deleteAlternative(id: number): Promise<boolean>;
}
