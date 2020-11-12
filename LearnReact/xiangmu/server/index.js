const { log } = require('console');
var express = require('express');
var sqlQuery = require('./sql')
var app = new express();
//头部信息
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");//允许所有来源访问 
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");//允许访问的方式 
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/', (req, res) => {
    res.send('这是答题api服务器')
})

app.get('/rtimu', async (req, res) => {
    console.log('==========reqreqreqreq==========================');
    console.log(req.query);
    console.log('====================================');
    let page = req.query.page ? req.query.page : 0;
    let size = req.query.size ? req.query.size : 10;
    // 随机获取10个题目
    let strSql = `select * from dati limit ${page},${size}`
    let resData = await sqlQuery(strSql)
    // res.send(resData)
    res.json(Array.from(resData));
})


app.listen(9090, () => {
    console.log("server start","http://localhost:9090/");
})