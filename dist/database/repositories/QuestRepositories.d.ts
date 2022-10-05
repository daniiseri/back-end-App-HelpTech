import { Quest } from "../../models/Quest";
export declare class QuestRepositories {
    findAll(): Promise<any>;
    findById(code: any): Promise<any>;
    findByCategory(code: number): Promise<any>;
    create(data: any): Promise<any>;
    update(data: Quest): Promise<any>;
    delete(code: number): Promise<any>;
}
