import express from "express";
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from "../data/restaurants.js";

const router = express.Router();

router.get("/restaurants/:id", async(req, res) => //get
{
    const id = parseInt(req.params.id);
    try
    {
        const restaurant = await getRestaurant(id);
        res.status(200).json(restaurant);
    }
    catch(error)
    {
        res.status(500).json({"Message": `${error}`});
    }
});

router.post("/restaurants", async(req, res) => //post
{
    const restaurantData = req.body;
    try
    {
        const restaurant = await createRestaurant(restaurantData);
        res.status(200).json(restaurant);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({"Message": `${error}`});
    }
});

router.delete("/restaurants/:id", async(req, res) => //delete
{
    const id = parseInt(req.params.id);
    try
    {
        const restaurant = await deleteRestaurant(id);
        res.status(200).json(restaurant);
    }
    catch(error)
    {
        res.status(500).json({"Message": `${error}`});
    }
});

export { router as backendRouter };