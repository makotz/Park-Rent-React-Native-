'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {Component} = React;
var {
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
} = ReactNative;

var Parkingspots = require('./Parkingspots')

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1
    }
});

class Featured extends Component {
    render() {
        return (
          <NavigatorIOS style={styles.container} initialRoute={{ title: 'All Parkingspots', component: Parkingspots
                }}/>
          );
    }
}

module.exports = Featured;
