import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Parent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>组件插槽</h1>
        {this.props.children}

        <Child>
          <h1 postion-index="header">这里是Child1</h1>
          <h1 postion-index="main">这里是Child2</h1>
          <h1 postion-index="footer">这里是Child3</h1>
        </Child>
      </div>
    )
  }
}

class Child extends Component {
  render() {
    var headerItem, mainItem, footerItem;
    this.props.children.map((item, index) => {
      switch (item.props["postion-index"]) {
        case "header":
          headerItem = item;
          break;
        case "main":
          mainItem = item;
          break;
        case "footer":
          footerItem = item;
          break;

        default:
          break;
      }
    })
    return (
      <div>
        <div className="header">{headerItem}</div>
        <div className="main">{mainItem}</div>
        <div className="footer">{footerItem}</div>
      </div>
    )
  }
}

class RootCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 2, 3]
    }
  }
  render() {
    return (
      <Parent>
        <h3 data-index={this.state.arr[0]}>子组件1</h3>
        <h3 data-index={this.state.arr[1]}>子组件2</h3>
        <h3 data-index={this.state.arr[2]}>子组件3</h3>
      </Parent>
    )
  }
}


ReactDOM.render(
  <RootCom></RootCom>,
  document.getElementById('root')
);

