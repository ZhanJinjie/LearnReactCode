import React, { Component } from 'react';
import './App.css';

// // hash 模式
// import {HashRouter as Router, Link, Route} from 'react-router-dom'

// history 模式 {根组件，跳转组件，匹配路由, 重定向组件}
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'

function VerifyPage(props) {
  if (props.location.state.loginState == 'success') {
    return <Redirect to="/admin"></Redirect>
  } else {
    return <Redirect to="/login"></Redirect>
  }
}


function Home() {
  let pathObj = {
    pathname: "/verify",
    state: {
      loginState: "success"
    }
  }
  return (
    <div>
      <h1>首页</h1>
      <Link to={pathObj}>验证</Link>
    </div>
  )
}

function LoginPage() {
  return (
    <div>
      <h1>登录页面</h1>
    </div>
  )
}

function MainPage(props) { 
  console.log(props);
  return (
    <div>
      <h1>主页面</h1>
      {props.match.params.id}
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Home}></Route>
          <Route path="/verify" exact component={VerifyPage}></Route>
          <Route path="/login" exact component={LoginPage}></Route>
          <Route path="/admin" exact component={MainPage}></Route>
        </Router>
      </div>
    )
  }
}

export default App;
