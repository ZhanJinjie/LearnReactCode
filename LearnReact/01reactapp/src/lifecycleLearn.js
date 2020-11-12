import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class ComLife extends Component {
  constructor(props) {
    super(props); // 调用继承的类的构造函数
    this.state = {
      msg: "hello world"
    };
    this.changeMsg = this.changeMsg.bind(this);
    console.log("constructor 构造函数");
  }
  componentWillMount() {
    console.log("componentWillMount 组件将要渲染");
  }
  componentDidMount() {
    console.log("组件渲染完毕~~~");
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps 组件将要接收新的数据state和props");
  }
  componentWillUpdate() {
    console.log("componentWillUpdate 组件将要更新");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate 组件更新完毕");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount 组件将要移除");
  }
  render() {
    console.log("render 渲染函数或类");
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.changeMsg}>组件更新</button>
      </div>
    );
  }

  changeMsg() {
    this.setState({
      msg: "Are you OK ?"
    });
  }
}

ReactDOM.render(
  <ComLife></ComLife>,
  document.querySelector("#root")
);