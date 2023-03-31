import {StyleSheet, Text} from 'react-native';
import React from 'react';

const MulText = ({style, children}) => (
  <Text style={[font.mulFont, ...style]}>{children}</Text>
);

export default MulText;

const font = StyleSheet.create({
  mulFont: {
    fontFamily: 'Mulish-Regular',
  },
});
