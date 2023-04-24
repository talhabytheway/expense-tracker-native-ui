import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Font from '../Font';
import images from '../../assets';
import Hamburger from '../../assets/svg/Hamburger';
import s from '../../styles/global';
const Navbar = () => {
  return (
    <View style={[s.bgGreen, styles.navbar]}>
      <TouchableOpacity>
        <Hamburger style={styles.hamburger} />
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
    alignItems: 'flex-start',
    height: 52,
    width: 52,
  },
  profile: {
    width: 42,
    height: 42,
  },
});

export default Navbar;
