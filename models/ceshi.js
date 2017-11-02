var express = require('express');
var app = express();

var mysql = require('mysql');
//配置模块
var settings = require('./settingsm2');
//连接数据库
var connection = mysql.createConnection(settings.db);
var data = [];
connection.connect();

//查询
var selectSQL = 'select * from `gpsdata`';

var arr = [];
connection.query(selectSQL, function(err, rows) {
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

    //把搜索值输出
    app.get('/', function(req, res) {
        res.send(data);
    });


});
//关闭连接
connection.end();
app.listen(3001);