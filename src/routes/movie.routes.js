const express = require("express")

const movieRouter = express.Router();
const { getMovies, getMovie, createMovie, updateMovie, deleteMovie} = require("../controllers/movie.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

movieRouter.get("/", getMovies );
movieRouter.get("/:id", getMovie );
movieRouter.post("/", [isAuth], createMovie);
movieRouter.patch("/:id", updateMovie);
movieRouter.delete("/:id", [isAuth], deleteMovie);

module.exports = movieRouter;


