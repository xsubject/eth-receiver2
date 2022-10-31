import { expect } from "chai";
import { NUMBER } from "sequelize";
import SqliteProvider from "../src/database/SqliteProvider";
import fs from "fs";
import { connectDatabase } from "../src/database/Database";


const PATH_TO_SQLITE_DB_PATH = './db__test__sqlite3';

describe("Database", () => {
    
    afterEach(() => {
        if(fs.existsSync(PATH_TO_SQLITE_DB_PATH)) {
            fs.rmSync(PATH_TO_SQLITE_DB_PATH)
        }
    });

    it("sqlite:memory:create db", async () => {
        const provider = new SqliteProvider();
        let db = connectDatabase(provider);


        let model: any = db.define('Test', {
            content: NUMBER
        });

        await model.sync();

        await model.create({
            content: 2
        });
        let count = await model.count();
        expect(count).to.be.eq(1);
        await db.close();

        db = connectDatabase(provider);
        model = db.define('Test', {
            content: NUMBER
        });

        await model.sync();
        count = await model.count();
        expect(count).to.be.eq(0);
    })

    it("sqlite:path:create db", async () => {
        const provider = new SqliteProvider(PATH_TO_SQLITE_DB_PATH);
        let db = connectDatabase(provider);

        let model: any = db.define('Test', {
            content: NUMBER
        });

        await model.sync();

        await model.create({
            content: 2
        });
        let count = await model.count();
        expect(count).to.be.eq(1);
        await db.close();

        db = connectDatabase(provider);
        model = db.define('Test', {
            content: NUMBER
        });

        await model.sync();
        count = await model.count();
        expect(count).to.be.eq(1);
    })
});