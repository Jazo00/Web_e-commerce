const mongoose = require ('mongoose');

const featuredProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    imageUrl: String
});

module.exports = mongoose.model('featuredProduct', featuredProductSchema);