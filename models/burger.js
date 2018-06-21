var orm = require('../config/orm.js');

var burger = {
	all: function (callback) {
		orm.all('burgers', function (data) {
			callback(data);
		});
	},

	create: function (insertObj, callback) {
		orm.create('burgers', insertObj, function (data) {
			callback(data);
		});
	},
	update: function (updateObj, conditionObj, callback) {
		orm.update('burgers', updateObj, conditionObj, function (data) {
			callback(data);
		});
	},
	delete: function(id, callback) {
		console.log('hit delete');
		orm.delete('burgers', id, function(err, data) {
			callback(data);
		});
	}
};

module.exports = burger;