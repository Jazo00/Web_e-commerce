const express = require('express');
const router = express.Router();
const TradeItem = require('../models/tradeItem');

router.get('/trade-items', async (req, res) => {
    try {
        const tradeItems = await TradeItem.find();
        res.json(tradeItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
