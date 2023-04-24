import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ArWhite from '../../assets/svg/ArWhite';
import Kebab from '../../assets/svg/Kebab';
import s from '../../styles/global';

const Navbar = ({navigation}) => {
  return (
    <View style={[s.bgBlue, styles.navbar]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{padding: 10}}>
        <ArWhite />
      </TouchableOpacity>
      <TouchableOpacity style={{padding: 10}}>
        <Kebab />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: '11.54%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // paddingVertical: 14,
    paddingHorizontal: 16,
  },
});

export default Navbar;
