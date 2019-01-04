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
		.then((jsonObj)=>{
			console.log(jsonObj);
			for (var item in jsonObj) {
				console.log(jsonObj[item]);
				 PurchaseOrder.create(jsonObj[item]).then( purchaseOrder=> {	
				       res.json(purchaseOrder)
						
					});
				
			}
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
