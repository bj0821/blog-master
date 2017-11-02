var client = require('mysql');
//var client = new Client();
// client.user = 'root';
// client.password = 'root';
console.log('Connecting to MySQL...');
var conn = client.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	database:'gpsserver',
	port: 3306
});
//client.query('USE gpsserver');     //如果MySQL中没有库表，赶紧建。
conn.connect();
http = require("http");
//var data = [];
var server = http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    
    conn.query('SELECT * FROM gpsdata', function selectCb(err, results, fields) {  
        // if (err) {
        //     throw err;
        // }
        var data = '';
        if(results){
        for (var i=0; i<results.length; i++) {          
            var firstResult = results[i];
            data += 'id: ' + firstResult['id']+'tag: ' + firstResult['tag']; 
        } 
}
        response.write(data); 
        response.end();
    });
});

server.listen(8080);

var sys = require("util");
sys.puts("Server running at http://localhost:8080/"); 

conn.end();