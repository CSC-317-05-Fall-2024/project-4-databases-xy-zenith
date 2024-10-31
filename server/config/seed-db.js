/* Initialize the data in the DB */
import { pool } from './database.js';

const dropTables = async () => {
    try {
        const dropTablesQuery = `
            DROP TABLE IF EXISTS restaurants;
        `;
        await pool.query(dropTablesQuery);
    } catch (error) {
        console.log(error)
    }
}

const createTables = async () => {
    try {
        const createTablesQuery = `
            CREATE TABLE IF NOT EXISTS restaurants (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            address TEXT NOT NULL,
            photo TEXT);`;
        await pool.query(createTablesQuery);
    } catch (error) {
        console.log(error)
    }
}

const insertData = async () => {
    try {
        const insertDataQuery = `
            INSERT INTO restaurants (name, phone, address, photo)
            VALUES ('Ladies Street Sik Fan Co.', '2685 1618', 'Shop B, 1/F, Witty Commercial Building, 1A-1L Tung Choi Street, Mong Kok', '/images/ladiesStCo.jpg'),
            ('Kam's Roast Goose', '5408 7740', 'G/F, Po Wah Commercial Centre, 226 Hennessy Road, Wan Chai', '/images/kamRoast.jpg'),
            ('Luk On Kui', '2156 9328', '2-3/F, 40-50 Des Voeux Road West, Sheung Wan', '/images/lukOnKui.jpg'),
            ('Hing Kee Claypot Rice Restaurant', '2384 3647', 'G/F, 15-19 Temple Street, Yau Ma Tei', '/images/hingKee.jpg'),
            ('Red Tea Café', '6513 3838', '594-596 Nathan Road, Mong Kok', '/images/redTea.jpg'),
            ('Tasty Congee & Noodle Wantun Shop', '2327 2681', 'Shop 1080-82, 1/F, Wood Zone, ELEMENTS, 1 Austin Road West, Tsim Sha Tsui', '/images/tasty.jpg');`;
            await pool.query(insertDataQuery);
    } catch (error) {
        console.log(error)
    }
}

const setup = async () => {
    await dropTables();
    await createTables();
    await insertData();
}

setup();
