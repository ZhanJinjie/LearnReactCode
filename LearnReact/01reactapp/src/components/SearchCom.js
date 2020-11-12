import React, { Component } from 'react'

class SearchCom extends Component {
    constructor(props) {
        super(props)
        this.searchEvent = this.searchEvent.bind(this);
        this.inputChangeEvent = this.inputChangeEvent.bind(this);
        this.state = {
            searchValue: "",
            resultValue: ""
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="请输入查询的省份" onKeyDown={this.searchEvent} value={this.state.searchValue} onChange={this.inputChangeEvent}></input>
                <div>
                    <h2>查询的结果：</h2>
                    <div>
                        {this.state.resultValue}
                    </div>
                </div>
            </div>
        )
    }

    searchEvent(e) {
        if (e.keyCode === 13) { 
            
            console.log(this.props.dataList)
            for (var item of this.props.dataList) { 
                if (item.name === this.state.searchValue) {
                    console.log(true);
                    this.setState({
                        resultValue: (
                            <h1>{this.state.searchValue}:{item.value}</h1>
                        )
                    })
                    return;
                } else {
                    this.setState({
                        resultValue: (
                            <h1>查询失败</h1>
                        )
                    })
                }
            }

        }
    }

    inputChangeEvent(e) {
        this.setState({
            searchValue: e.target.value
        })
    }
}

export default SearchCom