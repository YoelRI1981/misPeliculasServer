
const Movie = require('../models/movie.models');
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
 
// get all
const getMovies = async (request, response) => {
    try {
        const movies = await Movie.find();
        response.status(200).json(movies);
 
    } catch (error) {
        console.log(error.message);
        response.status(404).json({ message: HTTPSTATUSCODE[400],});
    }
}
 
// get 1
const getMovie = async (request, response) => {
    try {
        const id = request.params.id;
        const movie = await Movie.findById(id);
        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: movie
        });
 
    } catch (error) {
        response.status(404).json({message: error.message});
    }
}
 
// post
const createMovie = async (request, response) => {
    const movie = new Movie(request.body);
    try {
        await movie.save();
        response.status(201).json({
            status: 201,
            message: HTTPSTATUSCODE[201], 
            movie: movie});
 
    } catch (error) {
        response.status(400).json({message: error.message});
    }
 
}
 
// patch
const updateMovie = async (request, response) => {
    try {
        const {id}= request.params;
        const body = new Movie(request.body);
        body._id = id    
        const movie = await Movie.findByIdAndUpdate(id, body, {new: true});
        if (!movie) {
            return response.status(404).json({ 
                status: 404,
                message: HTTPSTATUSCODE[404], 
            });
        }
        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: movie
        });

    } catch (error) {
        console.error(error.message);
        response.status(400).json({ message: error.message });
    }
};
 

// delete
const deleteMovie = async (request, response) => {
    try {
        const id = request.params.id;
        const movie = await Movie.findByIdAndDelete(id);

        if (!movie) {
            return response.status(404).json({ message: 'Película no encontrada' });
        }

        response.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: movie
        });

    } catch (error) {
        console.error(error.message);
        response.status(500).json({
            status: 500,
            message: HTTPSTATUSCODE[500],
            data: movie
        });
    }
};

 
 
module.exports = {
    getMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}