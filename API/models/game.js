const mongoose = require("mongoose");

const
    required = unique = trim = true,
    min = 1;

const game_schema = mongoose.Schema({
    id: { type: Number, required, trim },
    name: { type: String, required, trim, required },
    developer: { type: String, required, trim, required },
    cover: { type: String, required, trim, required },
    images: { type: [{ type: String, trim }]  },
    links: { type: [{ type: String, trim }]  },
    date: { type: Date, required },
});

const Game = mongoose.model("Game", game_schema);

exports.Game = Game;
exports.game_schema = game_schema;
