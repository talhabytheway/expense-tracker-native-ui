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
import Nav from './src/components/navbar/Navbar';
import Card from './src/components/card/Card';
import Send from './src/components/send/Send';
import RecentExp from './src/components/recentExp/RecentExp';

function App() {
  return (
    <SafeAreaView style={[g.f1, g.bgWhite]}>
      <View style={[g.f05]}>
        <Nav />
        <Card />
      </View>
      <View style={[g.f05]}>
        <Send />
        <RecentExp />
      </View>
    </SafeAreaView>
  );
}

export default App;
