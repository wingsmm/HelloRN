/**
 * Created by zhangbo on 2017/6/15.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    AlertIOS
} from 'react-native';


// // ES5写法
// var DTouchabelDemo = React.createClass({
//     // 不可改变的值
//     getDefaultProps(){
//         return{
//             age: 18
//         }
//     },
//
//     // 可以改变的值
//     getInitialState(){
//         return{
//             title:'不透明触摸',
//             person: '张三'
//         }
//     },
//
//     render() {
//         return (
//             <View ref="topView" style={styles.container}>
//                 <TouchableOpacity
//                     activeOpacity={0.5}
//                     onPress={()=>this.activeEvent('点击')}
//                     onPressIn={()=>this.activeEvent('按下')}
//                     onPressOut={()=>this.activeEvent('抬起')}
//                     onLongPress={()=>this.activeEvent('长按')}
//                 >
//                     <View style={styles.innerViewStyle}>
//                         <Text ref="event">常用的事件</Text>
//                     </View>
//                 </TouchableOpacity>
//
//                 <View>
//                     <Text>{this.state.title}</Text>
//                     <Text>{this.state.person}</Text>
//                     <Text>{this.props.age}</Text>
//                 </View>
//             </View>
//         );
//     },
//
//     activeEvent(event){
//         // 更新状态机
//         this.setState({
//             title: event,
//             person:'李四'
//         })
//
//         // 拿到View
//         this.refs.topView
//         this.refs.event
//     }
// });

ES6写法
class DTouchabelDemo extends Component {
    getDefaultProps(){
        return{
            age: 18
        }
    },

    // 可以改变的值
    getInitialState(){
        return{
            title:'不透明触摸',
            person: '张三'
        }
    },

    render() {
        return (
            <View ref="topView" style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>this.activeEvent('点击')}
                    onPressIn={()=>this.activeEvent('按下')}
                    onPressOut={()=>this.activeEvent('抬起')}
                    onLongPress={()=>this.activeEvent('长按')}
                >
                    <View style={styles.innerViewStyle}>
                        <Text ref="event">常用的事件</Text>
                    </View>
                </TouchableOpacity>

                <View>
                    <Text>{this.state.title}</Text>
                    <Text>{this.state.person}</Text>
                    <Text>{this.props.age}</Text>
                </View>
            </View>
        );
    },

    activeEvent(event){
        // 更新状态机
        this.setState({
            title: event,
            person:'李四'
        })

        // 拿到View
        this.refs.topView
        this.refs.event
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    innerViewStyle:{
        backgroundColor:'red'
    }
});
module.exports = DTouchabelDemo;