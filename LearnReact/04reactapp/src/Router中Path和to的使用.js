import React from 'react';
import './App.css';

// // hash 模式
// import {HashRouter as Router, Link, Route} from 'react-router-dom'

// history 模式 {根组件，跳转组件，匹配路由}
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>首页</h1>
    </div>
  )
}

function Me() {
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



function App() {
  return (
    <div className="App" id="app">
      这里是所有页面<br></br>
      <Router basename="/zjj">
        这里是router1
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/me">个人中心</Link>
        </div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/product" exact component={Product}></Route>
        <Route path="/me" exact component={Me}></Route>
      </Router>

      <Router>
        这里是router2
        <Route path="/" exact component={() => (<div>homehomehome</div>)}></Route>
        <Route path="/product" exact component={() => (<div>productproductproduct</div>)}></Route>
        <Route path="/me"exact  component={() => (<div>mememe</div>)}></Route>
      </Router>

    </div>
  );
}

export default App;
