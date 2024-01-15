const mongoose = require("mongoose")
const Movies = require("../models/movie.models")

const arrayMovies = [ {
    "title": "Hijos de los Hombres",
    "director": "Alfonso Cuaron",
    "year": 2006,
    "genre": [
      "Thriller ",
      "Ciencia Ficción"
    ],
    "cover": "https://pics.filmaffinity.com/children_of_men-423341707-mmed.jpg",
    "runTime": 105,
    "starring": [
      "Clive Owen",
      " Julianne Moore ",
      "Michael Caine"
    ]
  },
  {
  
    "title": "kill Bill vol. 1",
    "director": "Quentin Tarantino",
    "year": 2003,
    "genre": [
      "Thriller ",
      "Acción"
    ],
    "cover": "https://pics.filmaffinity.com/kill_bill_volume_1-216872360-mmed.jpg",
    "runTime": 110,
    "starring": [
      "Uma Thurman",
      " Daryl Hannah ",
      "Lucy Liu"
    ]
  },
  {
    "title": "Los Otros",
    "director": "Alejandro Amenabar",
    "year": 2001,
    "genre": [
      "Intriga",
      "Terror"
    ],
    "cover": "https://pics.filmaffinity.com/los_otros_the_others-255113377-mmed.jpg",
    "runTime": 104,
    "starring": [
      "Nicole Kidman",
      " Fionnula Flanagan ",
      "Christopher Eccleston"
    ]
  },
  {
    "title": "El Asesino",
    "director": "David Fincher",
    "year": 2023,
    "genre": [
      "Intriga",
      "Crimen"
    ],
    "cover": "https://pics.filmaffinity.com/the_killer-609845433-mmed.jpg",
    "runTime": 118,
    "starring": [
      "Michael Fassbender",
      "Tilda Swinton ",
      "Charles Parnel"
    ]
  },
  {
    "title": "Gladiator",
    "director": "Ridley Scott",
    "year": 2000,
    "genre": [
      "Acción",
      "Drama"
    ],
    "cover": "https://pics.filmaffinity.com/gladiator-331143379-mmed.jpg",
    "runTime": 150,
    "starring": [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen"
    ]
  },
  {
    "title": "Million Dolar Baby",
    "director": "Clint Eastwood",
    "year": 2004,
    "genre": [
      "Drama"
    ],
    "cover": "https://pics.filmaffinity.com/million_dollar_baby-342154413-mmed.jpg",
    "runTime": 132,
    "starring": [
      "Clint Eastwood",
      "Hilary Swank",
      "Morgan Freeman"
    ]
  },
  {
    "title": "Amelie",
    "director": "Jean-Pierre Jeunet",
    "year": 2001,
    "genre": [
      "Drama",
      "Comedia"
    ],
    "cover": "https://pics.filmaffinity.com/le_fabuleux_destin_d_amelie_poulain-848337470-mmed.jpg",
    "runTime": 120,
    "starring": [
      "Audrey Tautou",
      " Mathieu Kassovitz",
      "Rufus Magloire"
    ]
  },
  {
    "title": "El Pianista",
    "director": "Roman Polanski",
    "year": 2002,
    "genre": [
      "Drama"
    ],
    "cover": "https://pics.filmaffinity.com/the_pianist_le_pianiste-978132965-mmed.jpg",
    "runTime": 148,
    "starring": [
      "Adrien Brody",
      " Thomas Kretschmann",
      "Maureen Lipman"
    ]
  },
  {
    "title": "Malditos Bastardos",
    "director": "Quenting Tarantino",
    "year": 2009,
    "genre": [
      "Belico",
      "Acción"
    ],
    "cover": "https://pics.filmaffinity.com/inglourious_basterds-976286054-mmed.jpg",
    "runTime": 146,
    "starring": [
      "Brad Pitt",
      " Christoph Waltz ",
      "Michael Fassbender"
    ]
  },
  {
    "title": "Memento",
    "director": "Christopher Nolan",
    "year": 2000,
    "genre": [
      "Thriller",
      " Crimen"
    ],
    "cover": "https://pics.filmaffinity.com/memento-230609861-mmed.jpg",
    "runTime": 115,
    "starring": [
      "Guy Pearce",
      "Carrie-Anne Moss",
      "Joe Pantoliano"
    ]
  },
  {
    "title": "Infiltrados",
    "director": "Martin Scorsese",
    "year": 2006,
    "genre": [
      "Thriller",
      " Drama"
    ],
    "cover": "https://pics.filmaffinity.com/the_departed-749477966-mmed.jpg",
    "runTime": 149,
    "starring": [
      "Leonardo DiCaprio",
      "Matt Damon ",
      "Jack Nicholson"
    ]
  },
  {
    "title": "Snatch. Cerdos y diamantes",
    "director": "Guy Ritchie",
    "year": 2000,
    "genre": [
      "Comedia",
      " Crimen"
    ],
    "cover": "https://pics.filmaffinity.com/snatch-921179475-mmed.jpg",
    "runTime": 104,
    "starring": [
      "Jason Statham",
      " Stephen Graham ",
      "Brad Pitt"
    ]
  },
  {
    "title": "Bisg Fish",
    "director": "Tim Burton",
    "year": 2003,
    "genre": [
      "Drama",
      "Fantastico"
    ],
    "cover": "https://pics.filmaffinity.com/big_fish-838287233-mmed.jpg",
    "runTime": 126,
    "starring": [
      "Ewan McGregor",
      " Albert Finney ",
      "Billy Crudup"
    ]
  },
  {
    "title": "Gravity",
    "director": "Alfonso Cuaron",
    "year": 2013,
    "genre": [
      "Drama",
      "Thriller"
    ],
    "cover": "https://pics.filmaffinity.com/gravity-595126003-mmed.jpg",
    "runTime": 90,
    "starring": [
      "Sandra Bullock",
      " George Clooney",
      "Ed Harris"
    ]
  },
  {
    "title": "Torrente, el brazo tonto de la ley",
    "director": "Santiago Segura",
    "starring": [
      "Santiago Segura",
      " Javier Cámara",
      "Neus Asensi"
    ],
    "year": 1998,
    "genre": [
      "Comedia",
      "Policica"
    ],
    "runTime": 97,
    "cover": "https://pics.filmaffinity.com/torrente_el_brazo_tonto_de_la_ley-769153589-mmed.jpg",
  },
  {
    "title": "kill Bill vol. 2",
    "director": "Quentin Tarantino",
    "starring": [
      "Uma Thurman",
      " David Carradine ",
      "Michael Madsen ."
    ],
    "year": 2004,
    "genre": [
      "Thriller ",
      "Acción"
    ],
    "runTime": 137,
    "cover": "https://pics.filmaffinity.com/kill_bill_volume_2-249713987-mmed.jpg",
  
  },
  {
    "title": "Tiburon",
    "director": "Steven Spielberg",
    "starring": [
      "Roy Scheider",
      "Robert Shaw",
      "Richard Dreyfuss"
    ],
    "year": 1975,
    "genre": [
      "Suspense",
      "Terror"
    ],
    "runTime": 124,
    "cover": "https://pics.filmaffinity.com/jaws-195807307-mmed.jpg",
   
  }];

  mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const allMovies = await Movies.find();
    if(allMovies > 0){
        await Movies.collection.drop();
        console.log(" Movies borrada");
    }
  })

.catch((error) => console.log("error al borrar Movies", error))
.then(async () => {
const moviesMap = arrayMovies.map((movies)=> new Movies(movies));
await Movies.insertMany(moviesMap);
console.log("Movies insertada correctamente");

})
.catch((error) => console.log("error al insertar Movies", error))
.finally(()=> mongoose.disconnect());