import { CategoryServices } from "../services/CategoryServices";
import { NewCategoryInput } from "../input/NewCategoryInput";
export declare class CategoryResolver {
    categoryServices: CategoryServices;
    constructor();
    categories(): Promise<any[]>;
    createCategory(newCategoryInput: NewCategoryInput): Promise<number>;
    updateCategory(id: number, description: string): Promise<number>;
    deleteCategory(id: number): Promise<boolean>;
}
