/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View
// } from 'react-native';
//
// // 引用外部的组件
// var Main = require('./Component/XMGMain');
//
//
// class DNewsDemo extends Component {
//     render() {
//         return (
//             console.log("hello world!");
//             <Main />
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });
// AppRegistry.registerComponent('FirstProject', () => DNewsDemo);

import {
    AppRegistry,
} from 'react-native';
import loginView from './loginView';
AppRegistry.registerComponent('FirstProject', () => loginView);

// import {
//     AppRegistry,
// } from 'react-native';
// import NewsApp from './Component/NewsApp';
// AppRegistry.registerComponent('FirstProject', () => NewsApp);
