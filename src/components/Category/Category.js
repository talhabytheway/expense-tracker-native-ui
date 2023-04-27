import {StyleSheet, View} from 'react-native';
import React from 'react';

import KebabS from '../../assets/svg/KebabS';
import Icon from '../../assets/svg/Icon';
import Font from '../Font';
import ratios from '../../styles/ratios';

let {widthPixel, heightPixel, fontPixel} = ratios;

const Category = ({type, amount, selected}) => {
  return (
    <View style={styles.catPar(selected)}>
      <View style={styles.iconPar}>
        <View style={styles.icon(selected)}>
          <Icon color={selected ? '#0C0D5B' : '#4ECAB0'} type={type} />
        </View>
        <KebabS color={selected ? '#fff' : '#27272A'} />
      </View>
      <View style={styles.textPar}>
        <Font style={styles.type(selected)}>{type}</Font>
        <Font style={styles.amount(selected)}>${amount}</Font>
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  catPar: selected => ({
    paddingHorizontal: widthPixel(18),
    paddingTop: heightPixel(22),
    paddingBottom: heightPixel(26),
    backgroundColor: selected ? '#FDB2AD' : '#fff',
    height: selected ? heightPixel(210) : heightPixel(200),
    width: widthPixel(150),
    borderRadius: widthPixel(22),
    marginHorizontal: widthPixel(10),
    borderWidth: selected ? 0 : widthPixel(2),
    borderColor: '#FEE0DF',
    justifyContent: 'space-between',
    elevation: 15,
    shadowColor: '#1C2535',
    shadowOpacity: 0.1458,
    shadowRadius: heightPixel(7),
    shadowOffset: {
      width: 0,
      height: heightPixel(20),
    },
  }),
  iconPar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: selected => ({
    width: widthPixel(40),
    height: widthPixel(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthPixel(8),
    backgroundColor: selected ? '#fff' : '#C6EDE5',
  }),
  textPar: {},
  type: selected => ({
    fontSize: fontPixel(18),
    fontFamily: 'Mulish-Black',
    marginBottom: heightPixel(10),
    color: selected ? '#0C0D5B' : '#27272A',
  }),
  amount: selected => ({
    fontSize: fontPixel(22),
    fontFamily: 'Mulish-ExtraBold',
    color: selected ? '#fff' : '#0C0D5B',
  }),
});
