import express from "express";
import path from "path";
import { backendRouter } from "./routes/api.js";
import { fileURLToPath } from "url";
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from "./data/restaurants.js"; //import restaurant data

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs"); //ejs view engine
app.set("views", "views");

app.use(express.json()); //api router
app.use("/api", backendRouter);

app.get("/", (req, res) => //home page
{
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/attractions", (req, res) => //attractions page
{
    res.sendFile(path.join(__dirname, "public", "attractions.html"));
});

app.get("/restaurants", (req, res) => //restaurants page
{
    const restaurants = getRestaurants();
    res.render("restaurants", { restaurants });
});

app.get("/restaurants/:id", (req, res) => //restaurant details page
{
    const id = parseInt(req.params.id);
    const restaurant = getRestaurant(id);
    res.render("restaurant-details", { restaurant })
});

app.get("/new-restaurant-form", (req, res) => //new restaurant page
{
    res.sendFile(path.join(__dirname, "public", "new-restaurant-form.html"));
});

app.listen(PORT, () =>
{
    console.log(`Server is running on http://localhost:${PORT}`);
});