import {StyleSheet, View} from 'react-native';
import React from 'react';

import Arrow from '../../assets/svg/Arrow';
import Icon from '../../assets/svg/Icon';

import Font from '../Font';
import s from '../../styles/global';
import {useState} from 'react';
import {useEffect} from 'react';

const Item = ({item}) => {
  const [date, setDate] = useState();
  useEffect(() => {
    const date = new Date(item.expDate);
    const options = {day: 'numeric', month: 'short', year: 'numeric'};
    const dateString = date.toLocaleDateString('en-US', options);
    const timeOptions = {hour: 'numeric', minute: 'numeric', hour12: true};
    const timeString = date.toLocaleTimeString('en-US', timeOptions);
    setDate(`${dateString}, ${timeString}`);
  }, []);
  return (
    <View style={[styles.parent, styles.spaceB]}>
      <View style={[styles.imgC, s.bgLPink]}>
        <Icon type={item.expName} />
      </View>
      <View style={styles.textContP}>
        <View style={[styles.spaceB]}>
          <Font style={[s.font20, s.eBold, s.fontGray]}>{item.expName}</Font>
          <Font style={[s.font22, s.eBold, s.fontLPink]}>-${item.expense}</Font>
        </View>
        <View style={(styles.textC, styles.spaceB)}>
          <Font style={[s.fontDGray, s.bold]}>{date}</Font>
          <View style={styles.spendC}>
            <Arrow />
            <Font style={[s.fontDGreen, s.bold]}>Spend</Font>
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
    maxWidth: 600,
    paddingHorizontal: '3%',
    paddingVertical: 10,
  },
  spaceB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  hui: {
    width: 25,
    height: 25,
  },
  imgC: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  spendC: {
    flexDirection: 'row',
    flexShrink: 1,
  },
  textContP: {
    flexGrow: 1,
    paddingLeft: 10,
    justifyContent: 'space-around',
  },
});
