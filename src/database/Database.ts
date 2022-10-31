import { Sequelize } from "sequelize";
import Provider from "./Provider";

export const connectDatabase = (provider: Provider): Sequelize => {
    return new Sequelize({
        ...provider,
        logging: false
    });
}
