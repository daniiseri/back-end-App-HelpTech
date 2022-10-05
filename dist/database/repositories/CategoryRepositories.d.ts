import { Category } from "../../models/Category";
export declare class CategoryRepositories {
    findAll(): Promise<any[]>;
    findById(code: any): Promise<any[]>;
    create(data: any): Promise<number>;
    update(data: Category): Promise<number>;
    delete(code: number): Promise<number>;
}
