import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';

import Font from '../Font';
import images from '../../assets';
import s from '../../styles/global';

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
        <Font style={[s.bold, s.fontGray, styles.text]}>Jenny</Font>
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
    maxWidth: 500,
    padding: '3%',
  },
  card: {
    alignItems: 'center',
    padding: 10,
  },
  profile: {
    width: 56,
    height: 56,
  },
  text: {},
});
