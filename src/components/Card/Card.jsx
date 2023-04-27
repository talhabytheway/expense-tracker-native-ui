import {
  StyleSheet,
  View,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import React from 'react';
import images from '../../assets';
import Font from '../Font';
import s from '../../styles/global';

import ratios from '../../styles/ratios';

let {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} = ratios;

const Card = ({navigation}) => {
  return (
    <View style={styles.parent}>
      <View style={[styles.card]}>
        <Font style={[s.fontWhite, s.eBold, styles.balance]}>$5679.34</Font>
        <Pressable onPress={() => navigation.navigate('Expense')}>
          <Image source={images.card} style={styles.cardImage} />
        </Pressable>
      </View>
      <ImageBackground
        style={styles.shadow}
        blurRadius={10}
        source={images.oval}
      />
      <ImageBackground
        style={styles.shadow}
        blurRadius={10}
        source={images.oval}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#C6EDE5',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    width: '100%',
  },
  card: {
    width: '100%',
  },

  cardImage: {
    width: '100%',
    maxWidth: widthPixel(370),
    height: heightPixel(250),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  balance: {
    fontSize: fontPixel(28),
    left: widthPixel(105),
    bottom: heightPixel(90),
    position: 'absolute',
    zIndex: 100,
  },

  shadow: {
    width: '100%',
    height: heightPixel(150),
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    zIndex: -10,
    bottom: -35,
  },
});
