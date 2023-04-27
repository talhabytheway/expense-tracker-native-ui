import {StyleSheet, View} from 'react-native';
import React from 'react';

import Arrow from '../../assets/svg/Arrow';
import Icon from '../../assets/svg/Icon';

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

const Item = ({item}) => {
  return (
    <View style={[styles.parent, styles.spaceB]}>
      <View style={[styles.imgC, s.bgLPink]}>
        <Icon type={item.expName} />
      </View>
      <View style={styles.textContP}>
        <View style={[styles.spaceB]}>
          <Font style={[styles.expName, s.eBold, s.fontGray]}>
            {item.expName}
          </Font>
          <Font style={[styles.expense, s.eBold, s.fontLPink]}>
            -${item.expense}
          </Font>
        </View>
        <View style={(styles.textC, styles.spaceB)}>
          <Font style={[styles.expDate, s.fontDGray, s.bold]}>
            {item.expDate}
          </Font>
          <View style={styles.spendC}>
            <Arrow />
            <Font style={[styles.expDate, s.fontDGreen, s.bold]}>Spend</Font>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  parent: {
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: widthPixel(20),
    paddingVertical: heightPixel(15),
  },
  spaceB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgC: {
    width: widthPixel(60),
    height: widthPixel(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthPixel(14),
  },
  spendC: {
    flexDirection: 'row',
    flexShrink: 1,
  },
  textContP: {
    flexGrow: 1,
    paddingLeft: widthPixel(10),
    justifyContent: 'space-around',
  },
  expName: {
    fontSize: fontPixel(22),
  },
  expDate: {
    fontSize: fontPixel(14),
  },
  expense: {
    fontSize: fontPixel(23),
  },
});
