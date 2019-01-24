/**
 * http://usejsdoc.org/
 */
var express = require('express');
const sequelizedb = require('../../configs/db.js');
const PurchaseOrder = sequelizedb.purchaseOrders;
const fs = require("fs");       
var path = require('path');
const csv=require('csvtojson')
	function uploadCsv(req, res) {
		csv()
		.fromFile(req.file.path)
		.then((jsonObj) => {
			fs.unlinkSync(req.file.path);
			for (item in jsonObj) {
				PurchaseOrder.create(jsonObj[item])
					.then(purchaseOrders => {})
			}
			res.status(200).json({
				result: jsonObj,
				message: 'Successfully file upload'
			})
		})
		
	}	


	function DisplayRecord(req, res, err) {
		PurchaseOrder.findAll().then(purchaseOrder => {
			if (!err) return res.status(500).send('Error on the server.');
	        res.send({'result': purchaseOrder, message:'Successfully retrived all the purchaseOrderdetails'});
	      });
	
	}
module.exports = {
		
		uploadCsv:uploadCsv,
		DisplayRecord:DisplayRecord
		
		
};
