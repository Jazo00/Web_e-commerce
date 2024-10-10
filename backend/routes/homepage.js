const express = require('express');
const router = express.Router();

const Banner = require('../models/banner');
const category = require('../models/category');
const featuredProduct = require('../models/featuredProduct');
const tradeDeal = require('../models/tradeDeal');
const event = require('../models/event');

router.get('/', async(req, res)=>{
    try{
        const banner = await Banner.findOne();
        const categories = await category.find 
        const featuredProduct = await featuredProduct.find();
        const tradeDeal= await tradeDeal.find();
        const event = await event.find();

        res.json({banner, categories, featuredProduct, tradeDeal, event});

    }catch(err){
        res.status(500).send('Server Error')
    }
});

module.exports = router;