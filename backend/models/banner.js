const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    buttonText: String,
});

module.exports = mongoose.model('Banner', bannerSchema);