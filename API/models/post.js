const mongoose = require("mongoose");

const 
    required = unique = trim = true,
    min = 1;

const capitalize_first = str => str[0].toUpperCase() + str.slice(1);

const post_schema = mongoose.Schema({
    author: { type: String, required, trim, get: capitalize_first },
    date: { type: Date, required },
    content: { type: String, required, trim },
});

const Post = mongoose.model("Post", post_schema);

exports.Post = Post;
exports.post_schema = post_schema;
