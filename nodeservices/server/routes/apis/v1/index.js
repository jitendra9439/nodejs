'use strict';

const
    express = require('express'),
    purchaseController = require('../../../controllers/apis/controller.purchase.js');
    let router = express.Router();
    router.use('/purchase', purchaseController);
	module.exports = router;