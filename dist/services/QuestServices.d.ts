import { QuestRepositories } from '../database/repositories/QuestRepositories';
import { Quest } from '../models/Quest';
export declare class QuestServices {
    questRepositories: QuestRepositories;
    constructor();
    getAll(): Promise<any>;
    getByCategory(code: number): Promise<any>;
    create(data: any): Promise<any>;
    update(data: Quest): Promise<any>;
    delete(code: number): Promise<any>;
}
