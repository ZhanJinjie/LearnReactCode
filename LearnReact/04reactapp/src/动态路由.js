import React, { Component } from 'react';
import './App.css';

// // hash 模式
// import {HashRouter as Router, Link, Route} from 'react-router-dom'

// history 模式 {根组件，跳转组件，匹配路由}
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>首页</h1>
    </div>
  )
}

function Me(props) {
  console.log(props);
  return (
    <div>
      <h1>个人中心</h1>
    </div>
  )
}

function Product() {
  return (
    <div>
      <h1>产品页面</h1>
    </div>
  )
}

function News(props) { 
  console.log(props);
  return (
    <div>
      <h1>新闻页面</h1>
      {props.match.params.id}
    </div>
  )
}


class App extends Component {
  render() {
    let meObj = {
      pathname: "/me", // 跳转的路径
      search: "?username=zjj", // get请求参数
      hash: "#abc", // 设置的Hash值
      state: { msg: 'helloworld' } // 传入组件的参数
    };
    return (
      <div className="App" id="app">
        <Router basename="/zjj">
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to={meObj} replace>个人中心</Link>
            <Link to="/news/12345">news</Link>
            {/* replace 会替换当前页（1,2）-->（1,3），点击返回（1）*/}
          </div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/product" exact component={Product}></Route>
          <Route path="/me" exact component={Me}></Route>
          <Route path="/news/:id" exact component={News}></Route>
        </Router>
      </div>
    )
  }

}

export default App;
