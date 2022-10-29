import { Sequelize } from "sequelize";
import Provider from "./Provider";

export type Database = Sequelize;

export const connectDatabase = (provider: Provider): Database => {
    return new Sequelize({
        ...provider,
        logging: false
    });
}
