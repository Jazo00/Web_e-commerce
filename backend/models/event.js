const mongoose = require ('mongoose');

const eventSchema = new mongoose.Schema({
    name: String, 
    location: String,
    date: Date,
    imageUrl: String
});

module.exports = mongoose.model('event', eventSchema);