import {Text} from 'react-native';
import React from 'react';

const MulText = ({style, children}) => {
  console.log(style);
  return <Text style={style}>{children}</Text>;
};

export default MulText;
