const { SchemaTypes } = require("mongoose");
const mongoose = require("mongoose");
 
const actorScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlenght: 2,
    },
    birthdate: {
        type: String,
        required: true,
        trim: true,
      },
    country: {
      type: String,
      required: true,
      trim: true,
    },

    portrait: {
      type: String,
      required: true,
      trim: true,
    },

    filmography: [{type: SchemaTypes.ObjectId, ref: "Movies" }]
  },
  {
    timestamps: true,
  }
);
 
const Actor = mongoose.model("Actor", actorScheme);
module.exports = Actor;
 