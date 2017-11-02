var mysql = require('mysql');
var xlsx = require('node-xlsx');
var fs = require('fs');
var conn = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	database:'gpsserver',
	port: 3306
});
var data = [];
conn.connect();
conn.query('SELECT * from gpsdata', function(err, rows, fields) {
	if(rows)
		{
			for(var i = 0; i < rows.length; i++)
			{
				var arr=[];
				var value=rows[i];
				for(var j in value){
					arr.push(value[j]);
				}
				data.push(arr);
			}
		}
		var buffer = xlsx.build([
			{
				name:'sheet1',
				data:data
			}
		]);
		fs.writeFileSync('gpsdata.xlsx',buffer,{'flag':'w'});
});
conn.end();