import {StyleSheet, View, ImageBackground} from 'react-native';
import React from 'react';
import s from '../../styles/global';

import Font from '../Font';
import ratios from '../../styles/ratios';
import bgbtn from '../../assets/images/bgBtn.png';

let {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} = ratios;

const Button = ({title, isActive}) => {
  return (
    <View>
      <ImageBackground
        style={styles.bg}
        resizeMode="contain"
        imageStyle={title == 'Income' && {transform: [{scaleX: -1}]}}
        source={isActive && bgbtn}>
        <Font style={[s.eBold, styles.text(isActive), styles.child]}>
          {title}
        </Font>
      </ImageBackground>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: isActive => ({
    color: isActive ? '#fff' : '#7098A5',
    textAlign: 'center',
    fontSize: fontPixel(19),
    paddingVertical: heightPixel(10),
  }),
  bg: {
    height: heightPixel(70),
    width: widthPixel(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
