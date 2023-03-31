/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  ViewComponent,
} from 'react-native';
const g = require('./src/styles/global');
import MulText from './src/components/MulText';

function App() {
  return (
    <View style={[g.bgWhite, g.f1]}>
      <SafeAreaView style={[g.bgGreen, g.f05]}>
        <View style={g.view}>
          <MulText style={[g.font26, g.fontBlack, g.fontDGreen]}>LMS</MulText>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default App;
