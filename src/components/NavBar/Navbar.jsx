import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Font from '../Font';
import images from '../../assets';
import Hamburger from '../../assets/svg/Hamburger';
import s from '../../styles/global';
const Navbar = () => {
  return (
    <View style={[s.bgGreen, styles.navbar]}>
      <TouchableOpacity onPress={() => console.log('kek')}>
        <Hamburger />
      </TouchableOpacity>
      <Font style={[s.font24, s.fontBlue, s.black, styles.text]}>My Card</Font>
      <TouchableOpacity>
        <Image source={images.profileM} style={styles.profile} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  hamburger: {
    height: 32,
    width: 32,
  },
  profile: {
    width: 42,
    height: 42,
  },
});

export default Navbar;
