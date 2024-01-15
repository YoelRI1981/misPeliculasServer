const express = require("express")

const actorsRouter = express.Router();
const { getActors, getActor, createActor, updateActor, deleteActor} = require("../controllers/actor.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

actorsRouter.get("/", getActors );
actorsRouter.get("/:id", getActor );
actorsRouter.post("/", [isAuth], createActor);
actorsRouter.patch("/:id", updateActor);
actorsRouter.delete("/:id", [isAuth], deleteActor);

module.exports = actorsRouter;
