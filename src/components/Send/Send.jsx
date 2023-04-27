import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';

import Font from '../Font';
import images from '../../assets';
import s from '../../styles/global';
import ratios from '../../styles/ratios';

let {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} = ratios;

const Send = () => {
  let {Send, profile1, profile2, profile3} = images;
  return (
    <View style={styles.parent}>
      <View style={styles.card}>
        <TouchableOpacity>
          <Send />
        </TouchableOpacity>
        <Font style={[s.fontBlack, s.black, styles.text]}>Send</Font>
      </View>
      <View style={styles.card}>
        <TouchableOpacity>
          <Image source={profile1} style={styles.profile} />
        </TouchableOpacity>
        <Font style={[s.bold, s.fontGray, styles.text]}>Jennie</Font>
      </View>
      <View style={styles.card}>
        <TouchableOpacity>
          <Image source={profile2} style={styles.profile} />
        </TouchableOpacity>
        <Font style={[s.bold, s.fontGray, styles.text]}>Sawn</Font>
      </View>
      <View style={styles.card}>
        <TouchableOpacity>
          <Image source={profile3} style={styles.profile} />
        </TouchableOpacity>
        <Font style={[s.bold, s.fontGray, styles.text]}>Mittali</Font>
      </View>
    </View>
  );
};

export default Send;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: widthPixel(20),
    paddingVertical: heightPixel(10),
  },
  card: {
    alignItems: 'center',
    paddingVertical: heightPixel(10),
  },
  profile: {
    width: widthPixel(66),
    height: widthPixel(66),
  },
  text: {
    fontSize: fontPixel(16),
    paddingTop: heightPixel(13),
  },
});
