import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
const g = require('./src/styles/global');
import Home from './src/pages/Home';
import Expense from './src/pages/Expense';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={[g.f1]}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Expense" component={Expense} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
