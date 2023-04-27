import {StyleSheet, Image, View, Pressable, FlatList} from 'react-native';
import React, {useState} from 'react';

import images from '../../assets';
import Font from '../Font';
import s from '../../styles/global';
import Item from './Item';
import ratios from '../../styles/ratios';

let {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} = ratios;

const RecentExp = () => {
  const [isOpen, setIsOpen] = useState(true);

  const data = [
    {
      expName: 'Taxi',
      expDate: '10 Jan 2020, 02:00 PM',
      expense: '250.30',
    },
    {
      expName: 'Travel',
      expDate: '9 Jan 2020, 06:00 PM',
      expense: '550.00',
    },
    {
      expName: 'Health',
      expDate: '6 Jan 2020, 05:00 PM',
      expense: '550.00',
    },
    {
      expName: 'Taxi',
      expDate: '10 Jan 2020, 02:00 PM',
      expense: 500.43,
    },
    {
      expName: 'Travel',
      expDate: '9 Jan 2020, 06:00 PM',
      expense: 500.43,
    },
    {
      expName: 'Health',
      expDate: '6 Jan 2020, 05:00 PM',
      expense: '550.00',
    },
    {
      expName: 'Taxi',
      expDate: '10 Jan 2020, 02:00 PM',
      expense: 500.43,
    },
    {
      expName: 'Travel',
      expDate: '9 Jan 2020, 06:00 PM',
      expense: 500.43,
    },
    {
      expName: 'Health',
      expDate: '6 Jan 2020, 05:00 PM',
      expense: '550.00',
    },
  ];
  return (
    <View>
      <View style={[styles.parent]}>
        <Font style={[styles.heading, s.bold, s.fontBlack]}>
          Recent Expenses
        </Font>
        <Pressable style={styles.arrowCont} onPress={() => setIsOpen(!isOpen)}>
          <Font style={[styles.recent, s.medium, s.fontBlack]}>Recent</Font>

          <Image
            source={images.arrowD}
            style={[styles.arrow, !isOpen && styles.close]}
          />
        </Pressable>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return <Item key={new Date().getUTCMilliseconds} item={item} />;
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default RecentExp;

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: widthPixel(20),
    paddingVertical: widthPixel(10),
  },
  recent: {
    fontSize: fontPixel(16.3),
  },
  heading: {
    fontSize: fontPixel(28),
  },
  arrow: {
    marginLeft: widthPixel(6),
    width: widthPixel(14),
    height: widthPixel(8),
    resizeMode: 'contain',
  },
  arrowCont: {
    alignItems: 'center',
    paddingHorizontal: widthPixel(8),
    paddingVertical: heightPixel(11),
    flexDirection: 'row',
    borderColor: '#C4EAE3',
    borderWidth: widthPixel(1.5),
    borderRadius: widthPixel(8),
    fontSize: fontPixel(14.3),
  },
  close: {
    transform: [{rotateX: '180deg'}],
  },
});
