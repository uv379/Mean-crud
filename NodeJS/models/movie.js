const mongoose = require('mongoose');

var Movie = mongoose.model('Movie', {
    movie_name: { type: String },
    release_date: { type: String },
    description: { type: String },
    
});

module.exports =  Movie ;