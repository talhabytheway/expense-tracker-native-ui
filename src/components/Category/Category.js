import {StyleSheet, View} from 'react-native';
import React from 'react';

import KebabS from '../../assets/svg/KebabS';
import Icon from '../../assets/svg/Icon';
import Font from '../Font';

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
    paddingHorizontal: 18,
    paddingTop: 22,
    paddingBottom: 26,
    backgroundColor: selected ? '#FDB2AD' : '#fff',
    height: 186,
    width: 150,
    borderRadius: 22,
    marginHorizontal: 10,
    marginBottom: 30,
    borderWidth: selected ? 0 : 2,
    borderColor: '#FEE0DF',
    justifyContent: 'space-between',
    elevation: 15,
    shadowColor: '#1C2535',
    shadowOpacity: 0.1458,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 20,
    },
  }),
  iconPar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: selected => ({
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: selected ? '#fff' : '#C6EDE5',
  }),
  textPar: {},
  type: selected => ({
    fontSize: 16,
    fontFamily: 'Mulish-Black',
    marginBottom: 10,
    color: selected ? '#0C0D5B' : '#27272A',
  }),
  amount: selected => ({
    fontSize: 20,
    fontFamily: 'Mulish-ExtraBold',
    color: selected ? '#fff' : '#0C0D5B',
  }),
});
