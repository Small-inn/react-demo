//语法规定
//1、定义模块 class Life extends Component
//2、导出模块 export default
//3、引入模块 import
//4、默认属性
/*
static defaultProps = {
autoPlay: false,
    maxLoops: 10,
};  // 注意这里有分号
*/
//5、默认state
/*
 constructor(props){
    super(props);
    console.log("构造函数");
    // 初始化了我们的state，这是被推荐的写法
    this.state = {
        props1:"初始化state"
    };
}
*/
//6、定义方法
/*
（1）生命周期的方法
 componentWillMount(){
    console.log("componentWillMount");
 }
 (2)自定义的方法
 click1=()=>{
     console.log("点击了单击事件");
     this.setState({
         props1:"改变state的值"
     })
     console.log("点击了单击事件结束");
 }
*/

import React, {Component} from 'react';

export default class Life extends Component {
    constructor(props){
        super(props);
        console.log("构造函数");
        // 初始化了我们的state，这是被推荐的写法
        this.state = {
           props1:"初始化state"
        };
    }
    // 组件将要被渲染到真实的dom节点中
    componentWillMount(){
        console.log("componentWillMount");
    }
    // 组件已经插入到真实的dom节点中
    componentDidMount(){
        console.log("componentDidMount");
    }
    // 组件是否要被重新渲染
    shouldCompontentUpdate(){
        console.log("shouldCompontentUpdate");
        return true;
    }
    // 组件将要被重新渲染
    conpontentWillUpdate(){
        console.log("conpontentWillUpdate");
    }
    // 组件已经被重新渲染
    conpontentDidUpdate(){
        console.log("conpontentDidUpdate");
    }
    // 组件将要接受到新属性
    compintentWillReceiveProps(){
        console.log("compintentWillReceiveProps");
    }
    click1=()=>{
        console.log("点击了单击事件");
        this.setState({
            props1:"改变state的值"
        })
        console.log("点击了单击事件结束");
    }
    render() {
        console.log("render");
        return (
            <div>
                <h1 onClick={this.click1}>{this.state.props1}</h1>
            </div>
        )
    }
}

//import React, {Component} from 'react';


// ES5定义组件的写法
//var Life = React.createClass({
//    // getDefaultProps,getInitialState在es6的写法中不被支持
//    // 初始化props属性方法
//    getDefaultProps(){
//        console.log("getDefaultProps");
//    },
//    // 初始化我们的state属性
//    getInitialState(){
//        console.log("getInitialState");
//        return {
//            props1:"初始化state的值"
//        }
//    },
//    // 组件将要被渲染到真实的dom节点中
//    componentWillMount(){
//        console.log("componentWillMount");
//    },
//    // 组件已经插入到真实的dom节点中
//    componentDidMount(){
//        console.log("componentDidMount");
//    },
//    // 组件是否要被重新渲染
//    shouldComponentUpdate(){
//        // 这个方法比较特殊，如果你要重写，你要在这里手动的进行一下state值是否发生改变的判断，因为已经把之前的方法覆盖了
//        console.log("shouldCompontentUpdate");
//        return false;
//    },
//    // 组件将要被重新渲染
//    componentWillUpdate(){
//        console.log("conpontentWillUpdate");
//    },
//    // 组件已经被重新渲染
//    componentDidUpdate(){
//        console.log("conpontentDidUpdate");
//    },
//    // 组件将要接受到新属性
//    componentWillReceiveProps(){
//        console.log("compintentWillReceiveProps");
//    },
//    click1(){
//        console.log("点击事件开始");
//        this.setState({
//            props1:"改变state的值"
//        })
//        console.log("点击事件完毕");
//    },
//    render() {
//        console.log("render");
//        return (
//            <div>
//                <h1 onClick={this.click1}>{this.state.props1}</h1>
//            </div>
//        )
//    }
//})
//
//module.exports=Life;

