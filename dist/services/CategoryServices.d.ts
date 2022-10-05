import { CategoryRepositories } from '../database/repositories/CategoryRepositories';
import { Category } from '../models/Category';
export declare class CategoryServices {
    categoryRepositories: CategoryRepositories;
    constructor();
    getAll(): Promise<any[]>;
    create(data: any): Promise<number>;
    update(data: Category): Promise<number>;
    delete(code: number): Promise<number>;
}
