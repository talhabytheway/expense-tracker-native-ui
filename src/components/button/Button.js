import {StyleSheet, View} from 'react-native';
import React from 'react';
import s from '../../styles/global';

import Font from '../Font';

const Button = ({title, isActive}) => {
  return (
    <View style={styles.par(isActive)}>
      <View style={styles.pad1(isActive)}>
        <Font style={[s.eBold, s.font22, styles.text(isActive), styles.child]}>
          {title}
        </Font>
      </View>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  par: isActive => ({
    padding: 0.5,
  }),
  text: isActive => ({
    color: isActive ? '#fff' : '#7098A5',
    textAlign: 'center',
  }),
  child: {
    paddingVertical: '6%',
    backgroundColor: '#0C0D5B',
    borderRadius: 100,
  },
  pad1: isActive => ({
    padding: 0.3,
    borderRadius: 100,
    backgroundColor: isActive ? '#eee' : '#0C0D5B',
  }),
});
