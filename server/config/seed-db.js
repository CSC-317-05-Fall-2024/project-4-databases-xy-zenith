import { pool } from "./database.js"; //initialize data in db

const dropTables = async() => //drop table
{
    try
    {
        const dropTablesQuery = `
            DROP TABLE IF EXISTS reviews;
            DROP TABLE IF EXISTS restaurants;
        `;
        await pool.query(dropTablesQuery);
    }
    catch(error)
    {
        console.log(error);
    }
}

const createTables = async () => { //create table
    try
    {
        const createTablesQuery = `
            CREATE TABLE IF NOT EXISTS restaurants (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            address TEXT NOT NULL,
            photo TEXT);
            
            CREATE TABLE IF NOT EXISTS reviews (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            rating INT NOT NULL
            content TEXT
            restaurant_id INT
            FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE);
        `;
        await pool.query(createTablesQuery);
    }
    catch(error)
    {
        console.log(error);
    }
}

const insertData = async() => //insert into
{
    try
    {
        const insertDataQuery = `
            INSERT INTO restaurants (name, phone, address, photo)
            VALUES
            ('Ladies Street Sik Fan Co.', '2685 1618', 'Shop B, 1/F, Witty Commercial Building, 1A-1L Tung Choi Street, Mong Kok', '/images/ladiesStCo.jpg'),
            ('Kam''s Roast Goose', '5408 7740', 'G/F, Po Wah Commercial Centre, 226 Hennessy Road, Wan Chai', '/images/kamRoast.jpg'),
            ('Luk On Kui', '2156 9328', '2-3/F, 40-50 Des Voeux Road West, Sheung Wan', '/images/lukOnKui.jpg'),
            ('Hing Kee Claypot Rice Restaurant', '2384 3647', 'G/F, 15-19 Temple Street, Yau Ma Tei', '/images/hingKee.jpg'),
            ('Red Tea Café', '6513 3838', '594-596 Nathan Road, Mong Kok', '/images/redTea.jpg'),
            ('Tasty Congee & Noodle Wantun Shop', '2327 2681', 'Shop 1080-82, 1/F, Wood Zone, ELEMENTS, 1 Austin Road West, Tsim Sha Tsui', '/images/tasty.jpg');

            INSERT INTO reviews (rating, content, restaurant_id)
            VALUES
            (4, 'The old fashioned decoration is good for taking photos.', 0),
            (5, 'Food was tasty, I enjoy the dining experience.', 0),
            (3, 'The only good thing here is the roast goose.', 1),
            (5, 'Delicious traditional food!', 2),
            (4, 'Great and interesting food.', 3),
            (3, 'Food was great but the service is bad.', 3),
            (2, 'The staff is rude.', 3),
            (4, 'Cheap and tasty food.', 4),
            (4, 'The wantun noodles is good!', 5);
        `;
        await pool.query(insertDataQuery);
    }
    catch(error)
    {
        console.log(error);
    }
}

const setup = async() => //db setup
{
    await dropTables();
    await createTables();
    await insertData();
}

setup();
