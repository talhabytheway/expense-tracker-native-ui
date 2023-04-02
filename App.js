/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {SafeAreaView, View} from 'react-native';
const g = require('./src/styles/global');
import Nav from './src/components/NavBar/Navbar';
import Card from './src/components/Card/Card';
import Send from './src/components/Send/Send';

function App() {
  return (
    <SafeAreaView style={[g.f1, g.bgWhite]}>
      <View style={[g.f05]}>
        <Nav />
        <Card />
      </View>
      <View style={[g.f05]}>
        <Send />
      </View>
    </SafeAreaView>
  );
}

export default App;
