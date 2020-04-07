import React, { Component } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
// import RootNavigator from './src/rootNavigator';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image

        source={require('./src/assets/images/getstarted.png')}
      />
      </View>
    );
  }
}

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logo: {
    width: 66,
    height: 58,
  },
});