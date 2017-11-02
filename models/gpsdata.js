var mysql = require('mysql').Db;
var settingsm = require('../settingsm');

function Gpsdata(id, Longitude, Latitude, Time, Serialnumber, Mac, Remark) {
    this.id = id;
    this.Longitude = Longitude;
    this.Latitude = Latitude;
    this.Time = Time;
    this.Serialnumber = Serialnumber;
    this.Mac = Mac;
    this.Remark = Remark;
}

module.exports = Gpsdata;

//读取用户信息
Gpsdata.get = function (name, callback) {
    //打开数据库
    mysql.connect(settingsm.url, function (err, db) {
        if (err) {
            return callback(err);	//如果错误返回err
        }
        //读取users集合
        db.collection('gpsdata', function (err, collection) {
            if (err) {
                db.close();
                return callback(err);	//如果错误，返回err
            }
            //查找用户名name值为name的一个文档
            collection.findOne({
                id: id
            }, function (err, user) {
                db.close();
                if (err) {
                    return callback(err);	//如果错误返回err
                }
                callback(null, gpsdata);	//成功，返回查询的用户信息
            });
        });
    });
};