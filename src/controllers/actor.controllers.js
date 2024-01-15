const Actor = require('../models/actor.models');
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
 
// get all
const getActors = async (request, response) => {
    try {
        const actors = await Actor.find().populate("filmography", "title");
        response.status(200).json(actors);
 
    } catch (error) {
        console.log(error.message);
        response.status(404).json({ message: HTTPSTATUSCODE[400],});
    }
}
 
// get 1
const getActor = async (request, response) => {
    try {
        const id = request.params.id;
        const actor = await Actor.findById(id);
        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: actor
        });
 
    } catch (error) {
        response.status(404).json({message: error.message});
    }
}
 
// post
const createActor = async (request, response) => {
    const actor = new Actor(request.body);
    try {
        await actor.save();
        response.status(201).json({
            status: 201,
            message: HTTPSTATUSCODE[201], 
            actor: actor});
 
    } catch (error) {
        response.status(400).json({message: error.message});
    }
 
}
 
// patch
const updateActor = async (request, response) => {
    try {
        const {id}= request.params;
        const body = new Actor(request.body);
        body._id = id    
        const actor = await Actor.findByIdAndUpdate(id, body, {new: true});
        if (!actor) {
            return response.status(404).json({ 
                status: 404,
                message: HTTPSTATUSCODE[404], 
            });
        }
        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: actor
        });

    } catch (error) {
        console.error(error.message);
        response.status(400).json({ message: error.message });
    }
};
 

// delete
const deleteActor= async (request, response) => {
    try {
        const id = request.params.id;
        const actor = await Actor.findByIdAndDelete(id);

        if (!actor) {
            return response.status(404).json({ message: 'Actor no encontrado' });
        }

        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: actor
        });

    } catch (error) {
        console.error(error.message);
        response.status(500).json({
            status: 500,
            message: HTTPSTATUSCODE[500],
            data: actor
        });
    }
};

 
 
module.exports = {
    getActors,
    getActor,
    createActor,
    updateActor,
    deleteActor
}