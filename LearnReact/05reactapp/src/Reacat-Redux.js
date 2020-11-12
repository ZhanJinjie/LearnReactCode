import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

// 函数式计数器
class Counter extends Component {
  render() {
    return (
      <div>
        {/* state映射到props */}
        <h1>计数数量：{this.props.value}</h1>
        <button onClick={this.props.numAdd}>计数+1</button>
        <button onClick={this.props.numSub}>计数-1</button>
      </div>
    )
  }
}

//1. 创建数据仓库
const store = createStore(reducer);

//2.  数据处理函数
// reduce 2个作用：一，初始化数据；二，通过获取动作改变数据。
function reducer(state = { num: 1 }, action) {
  // 不能在初始化redux之前调用函数
  if (action.type.indexOf('redux')===-1) { 
    state = actionFunction[action.type](state, action);
    return {...state}; // 使用react-redux需要对数据进行解构
  } else {
    return state;
  }
};

let actionFunction = {
  numChange: function (state, action) {
    state.num += action.num;
    return state;
  }
}

//3.1 将state 映射到props 函数
function mapStateToProps(state) {
  return {
    value: state.num
  }
}
//3.2 将修改state数据的方法 映射到props, 默认传入store里的dispatch方法。
function mapDispatchToProps(dispatch) {
  return {
    numAdd: () => { dispatch({ type: 'numChange', num: 1 }) },
    numSub: () => { dispatch({ type: 'numChange', num: -1 }) }
  }
}

//4. 将上面的2个方法，映射到新组件上
const NewAPP = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

//5. 渲染
ReactDOM.render(
  <Provider store={store}>
    <NewAPP></NewAPP>
  </Provider>,
  document.getElementById('root')
);

