import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Item = ({data}) => {
  data = {
    expType: 'Taxi',
    expName: 'Taxi',
    expDate: new Date().getSeconds(),
    expense: 500.43,
  };
  return (
    <View>
      <Text>Item</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({});
