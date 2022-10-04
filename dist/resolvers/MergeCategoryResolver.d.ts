import { MergeCategoryServices } from "../services/MergeCategoryServices";
export declare class MergeCategoryResolver {
    mergeServices: MergeCategoryServices;
    constructor();
    mergeCategories(): Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader")>;
    createMergeCategory(): Promise<void>;
}
