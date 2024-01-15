const mongoose = require("mongoose");
 
const movieScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlenght: 2,
    },
    director: {
      type: String,
      required: true,
      trim: true,
    },

    starring: {
      type: Array,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      trim: true,
    },

    genre: {
      type: Array,
      required: true,
      trim: true,
    },

    runTime: {
      type: Number,
      required: true,
      trim: true,
    },

    cover: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
 
const Movies = mongoose.model("Movies", movieScheme);
module.exports = Movies;
 