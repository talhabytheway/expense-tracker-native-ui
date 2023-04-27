import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ArWhite from '../../assets/svg/ArWhite';
import Kebab from '../../assets/svg/Kebab';
import s from '../../styles/global';
import ratios from '../../styles/ratios';

let {widthPixel} = ratios;

const Navbar = ({navigation}) => {
  return (
    <View style={[s.bgBlue, styles.navbar]}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <ArWhite />
      </TouchableOpacity>
      <TouchableOpacity>
        <Kebab />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: '11%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: 14,
    paddingHorizontal: widthPixel(25),
  },
});

export default Navbar;
