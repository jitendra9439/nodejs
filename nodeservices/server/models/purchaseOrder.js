/**
 * http://usejsdoc.org/
 */
module.exports = (sequelize, Sequelize) => {
	const PurchaseOrder = sequelize.define('purchaseOrders', {
		store_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: false
		},
		
		order_id: {
			type: Sequelize.INTEGER
	  	},
	  	distributer_phone: {
			type: Sequelize.INTEGER
	  	},
	  	total_amount: {
			type: Sequelize.INTEGER
	  	},
	  	distributer_invoice_no: {
			type: Sequelize.STRING
	  	},
	  	total_discount: {
			type: Sequelize.INTEGER
	  	},
	  	net_amount: {
			type: Sequelize.INTEGER
	  	},
	  	pending_amount: {
			type: Sequelize.INTEGER
	  	},
	  	total_quantity: {
	  		type: Sequelize.INTEGER
		},
		total_items: {
			type: Sequelize.INTEGER
	  	},
	  	total_vat: {
	  		type: Sequelize.INTEGER
		}
		       
	}, {
		tableName: 'purchaseorder',
		timestamps: true,
		createdAt: false,
		updatedAt: false,
		deletedAt: false,
		underscored: true,
		freezeTableName: true,
		version: false
		//paranoid: true,
		 
	});
	
	return PurchaseOrder;
}