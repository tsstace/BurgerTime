var mysql = require('mysql');
var connection = require('./connection.js');

var orm = {
	all: function (table, callback) {
		var sql = 'SELECT * FROM ??';
		sql = mysql.format(sql, [table]);
		connection.query(sql,function (err, result) {
			if (err) throw err;
			callback(result);
		});

	},
	create: function (table, insertObj, callback) {
		connection.query('INSERT INTO ' + table + ' SET ?', [insertObj], function (err, result) {
			if (err) throw err;
			callback(result);
		});

	},
	update: function (table, updateObj, conditionObj, callback) {
		connection.query('UPDATE ' + table + ' SET ? WHERE ?', [updateObj, conditionObj], function (err, result) {
			if (err) throw err;
			callback(result);
		});

	},
	delete: function (table, id, callback) {
		connection.query('DELETE FROM '+ table +' WHERE id=?',[id], function (err, result) {
			if (err) throw err;
			callback(result);
		});

	}
};

module.exports = orm;