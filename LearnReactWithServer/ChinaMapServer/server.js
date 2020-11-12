//1.引入express
const express = require('express');
const axios = require('axios');

//2.创建服务器对象
let server = express();

//3.创建一个路由对象
let router = express.Router();

//4.设置路由
router.get('/login',(req,res)=>{
    res.send('这是登录页面');
}).get('/register',(req,res)=>{
    res.send('这是注册页面');
}).get('/', (req,res) => { 
    res.send('返回中国疫情数据')
}).get('/api/yiqing', async (req, res) => { 
    // 解决ajax跨域问题
    res.append("Access-Control-Allow-Origin","*");
    res.append("Access-Control-Allow-Content-Type","*");
    // 请求数据
    // let resData = await axios.get('https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5')
    // 头条数据
    let resData = await axios.get('https://i.snssdk.com/forum/home/v1/info/?activeWidget=1&forum_id=1656784762444839')
    let data = resData.data;
    
    res.send(data)
}).get('/api/news',async (req,res)=>{
    //解决ajax跨域问题
    res.append("Access-Control-Allow-Origin","*")
    res.append("Access-Control-Allow-content-type","*")
    //请求头条数据
    let httpUrl = 'https://i.snssdk.com/api/feed/forum_flow/v1/?activeWidget=1&query_id=1656810113086509&tab_id=1656810113086525&category=forum_flow_subject&is_preview=0&stream_api_version=82&aid=13&offset=0&count=20'
    let result = await axios.get(httpUrl)
    let data = result.data;
    
    res.send(data)
})
server.use(router);

//5.监听端口
server.listen(5555,(req,res)=>{
    console.log('Server running at http://127.0.0.1:5555/')
});