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
    View
} from 'react-native';
var HomeDetail = React.createClass({
    getInitialState:function () {
        return{
            summary:""
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.state.summary}
                </Text>
            </View>
        );
    },
    componentDidMount:function () {
        var url_api = "http://api.douban.com/v2/movie/subject/"+this.props.data.id;
        fetch(url_api)
            .then((response)=>response.json())
            .then((responseData)=>{
                var summary = responseData.summary;
                this.setState({
                    summary:summary
                });
            });
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
module.exports = HomeDetail;