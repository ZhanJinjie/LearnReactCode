import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Redux, { createStore } from 'redux'
import App from './App';


// 函数式计数器
class Counter extends Component {
  render() {
    return (
      <div>
        {/* 3. 获取数据 */}
        <h1>计数数量：{store.getState().num}</h1>
        <button onClick={() => this.numChange(1)}>计数+1</button>
        <button onClick={() => this.numChange(-1)}>计数-1</button>
      </div>
    )
  }

  numChange = (data) => {
    //4. 通过仓库的方法dispatch 进行数据修改
    store.dispatch({
      type: (data > 0 ? 'add' : 'sub'),
      content: {
        id: 1,
        msg: 'hello world'
      }
    });
  }
}

//1. 创建数据仓库
const store = createStore(reducer);

//2.  数据处理函数
// reduce 2个作用：一，初始化数据；二，通过获取动作改变数据。
function reducer(state = { num: 0 }, action){
  switch (action.type) {
    case 'add':
      state.num++;
      break;
    case 'sub':
      state.num--;
      break;
    default:
      break;
  }
  // return {...state}; // 旧版本需要对数据进行解构
  return state;
};

//5. 监听数据的更改，重新渲染
store.subscribe(() => { 
  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  );
});

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);

