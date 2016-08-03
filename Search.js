'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class Search extends Component {
    render() {
        return (
  	    <View style={styles.container}>
	        <Text style={styles.description}>
        	  Hello Ryan
	        </Text>
	    </View>
        );
    }
}

module.exports = Search;
