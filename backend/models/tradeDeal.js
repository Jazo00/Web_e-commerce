const mongoose = require('mongoose')

const  tradeDealSchema = new mongoose.Schema({
    name: String,
    tradeItem: String, 
    price: Number,
    imageUrl: String,
    tag: String
});

module.exports = mongoose.model('tradeDeal', tradeDealSchema);
