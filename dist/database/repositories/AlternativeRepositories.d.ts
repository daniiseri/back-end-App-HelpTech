import { Alternative } from "../../models/Alternative";
export declare class AlternativeRepositories {
    findAll(): Promise<any[]>;
    findById(code: any): Promise<any[]>;
    findByQuest(code: number): Promise<any[]>;
    create(data: any): Promise<number>;
    update(data: Alternative): Promise<number>;
    delete(code: number): Promise<number>;
}
