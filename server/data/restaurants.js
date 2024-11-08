import { pool } from "../config/database.js";

const getRestaurants = async() => //get restaurants
{
    try
    {
        const results = await pool.query(`
            SELECT *
            FROM restaurants;
        `);
        return results.rows;
    }
    catch(error)
    {
        console.error(error);
    }
};

const getRestaurant = async(id) => //get single restaurant by id
{
    try
    {
        const results = await pool.query(`
            SELECT *
            FROM restaurants
            WHERE id = $1;
        `, [id]);
        return results.rows[0];
    }
    catch(error)
    {
        console.error(error);
    }
};

const createRestaurant = async(newRestaurant) => //create restaurant
{
    try
    {
        const { name, phone, address, photo } = newRestaurant;

        const results = await pool.query(`
            INSERT INTO restaurants (name, phone, address, photo)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `, [name, phone, address, photo]);
        return results.rows[0];
    }
    catch(error)
    {
        console.error(error);
    }
};

const deleteRestaurant = async(id) => //delete restaurant by id
{
    try
    {
        const results = await pool.query(`
            DELETE FROM restaurants
            WHERE id = $1;
        `, [id]);
        return results.rows;
    }
    catch(error)
    {
        console.error(error);
    }
};

const getReviewsForRestaurant = async(id) => //get reviews for restaurant by id
{
    try
    {
        const results = await pool.query(`
            SELECT *
            FROM reviews
            WHERE restaurant_id = $1;
        `, [id]);
    }
    catch(error)
    {
        console.error(error);
    }
}

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant, getReviewsForRestaurant };