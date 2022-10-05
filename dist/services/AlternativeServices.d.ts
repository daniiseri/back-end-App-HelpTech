import { AlternativeRepositories } from '../database/repositories/AlternativeRepositories';
import { Alternative } from '../models/Alternative';
export declare class AlternativeServices {
    alternativeRepositories: AlternativeRepositories;
    constructor();
    getAll(): Promise<any[]>;
    getByQuest(code: number): Promise<any[]>;
    create(data: any): Promise<number>;
    update(data: Alternative): Promise<number>;
    delete(code: number): Promise<number>;
}
