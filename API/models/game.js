const mongoose = require("mongoose");

const
    required = unique = trim = true,
    min = 1;

const capitalize_first = str => str[0].toUpperCase() + str.slice(1);

const game_schema = mongoose.Schema({
    name: { type: String, required, trim, get: capitalize_first },
    developer: { type: String, required, trim },
    cover: { type: String, required, trim },
    images: { type: [{ type: String, trim }]  },
    links: { type: [{ type: String, trim }]  },
    date: { type: Date, required },
});

const Game = mongoose.model("Game", game_schema);

exports.Game = Game;
exports.game_schema = game_schema;
