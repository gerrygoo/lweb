const mongoose = require("mongoose");

const
    required = unique = trim = true,
    min = 1;

const capitalize_first = str => str[0].toUpperCase() + str.slice(1);

const console_schema = mongoose.Schema({
    name: { type: String, required, trim, get: capitalize_first },
    image: { type: String, required, trim },
    techSpecs: { type: String, required, trim },
    games_ids: { type: [{ type: Number }], min, required },
});

const Console = mongoose.model("Console", console_schema);

exports.Console = Console;
exports.console_schema = console_schema;
