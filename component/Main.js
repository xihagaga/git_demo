/**
 * Created by dllo on 17/2/7.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';
//引入组件
var Home = require("./Home");
var Message = require("./Message");
var Find = require("./Find");
var Mine = require("./Mine");
var Main = React.createClass({
    getInitialState:function () {
        return {
            selectedTabBarItem:"home"
        }
    },
    render:function () {
        //return后如果返回的是一个对象则用{},若返回时一个标签则用()
        return(
           <TabBarIOS
                tintColor="orange"
           >
               {/*首页*/}
               <TabBarIOS.Item
                   icon={require("./../images/tabbar_home@2x.png")}
                   title="首页"
                   selected={this.state.selectedTabBarItem=="home"}
                   onPress={()=>{this.setState({
                       selectedTabBarItem:"home"
                   })}}
               >
                <NavigatorIOS
                    style={{flex:1}}
                    initialRoute={{
                        tintColor : "orange",
                        component:Home,//需要控制哪个具体版块
                        title:"主页",
                        leftButtonIcon:require("./../images/navigationbar_friendattention@2x.png"),
                        rightButtonIcon:require("./../images/navigationbar_pop@2x.png")
                    }}
                />
               </TabBarIOS.Item>
               {/*消息*/}
               <TabBarIOS.Item
                   icon={require("./../images/tabbar_message_center@2x.png")}
                   title="消息"
                   selected={this.state.selectedTabBarItem=="message"}
                   onPress={()=>{this.setState({
                       selectedTabBarItem:"message"
                   })}}
               >
                   <NavigatorIOS
                       style={{flex:1}}
                       initialRoute={{
                           component:Message,//需要控制哪个具体版块
                           title:"消息",
                       }}
                   />
               </TabBarIOS.Item>
               {/*发现*/}
               <TabBarIOS.Item
                   icon={require("./../images/tabbar_discover@2x.png")}
                   title="发现"
                   selected={this.state.selectedTabBarItem=="find"}
                   onPress={()=>{this.setState({
                       selectedTabBarItem:"find"
                   })}}
               >
                   <NavigatorIOS
                       style={{flex:1}}
                       initialRoute={{
                           component:Find,//需要控制哪个具体版块
                           title:"发现",
                       }}
                   />
               </TabBarIOS.Item>
               {/*我的*/}
               <TabBarIOS.Item
                   icon={require("./../images/tabbar_profile@2x.png")}
                   title="我的"
                   selected={this.state.selectedTabBarItem=="mine"}
                   onPress={()=>{this.setState({
                       selectedTabBarItem:"mine"
                   })}}
               >
                   <NavigatorIOS
                       style={{flex:1}}
                       initialRoute={{
                           component:Mine,//需要控制哪个具体版块
                           title:"我的",
                       }}
                   />
               </TabBarIOS.Item>
           </TabBarIOS>
        );
    }
});


const styles = StyleSheet.create({

});

//输出类
module.exports = Main;
