import {StyleSheet, Image, View, Pressable, FlatList} from 'react-native';
import React, {useState} from 'react';

import images from '../../assets';
import Font from '../Font';
import s from '../../styles/global';
import Item from './Item';

const RecentExp = () => {
  const [isOpen, setIsOpen] = useState(true);

  const data = [
    {
      expName: 'Taxi',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Travel',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Health',
      expDate: new Date().getTime(),
      expense: 550,
    },
    {
      expName: 'Taxi',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Health',
      expDate: new Date().getTime(),
      expense: 550,
    },
    {
      expName: 'Taxi',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Travel',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Health',
      expDate: new Date().getTime(),
      expense: 550,
    },
    {
      expName: 'Taxi',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Travel',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Health',
      expDate: new Date().getTime(),
      expense: 550,
    },
    {
      expName: 'Health',
      expDate: new Date().getTime(),
      expense: 550,
    },
    {
      expName: 'Taxi',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Travel',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Health',
      expDate: new Date().getTime(),
      expense: 550,
    },
    {
      expName: 'Taxi',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Travel',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Health',
      expDate: new Date().getTime(),
      expense: 550,
    },
    {
      expName: 'Health',
      expDate: new Date().getTime(),
      expense: 550,
    },
    {
      expName: 'Taxi',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Travel',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Health',
      expDate: new Date().getTime(),
      expense: 550,
    },
    {
      expName: 'Taxi',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Travel',
      expDate: new Date().getTime(),
      expense: 500.43,
    },
    {
      expName: 'Health',
      expDate: new Date().getTime(),
      expense: 550,
    },
  ];
  return (
    <View>
      <View style={[styles.parent]}>
        <Font style={[styles.heading, s.bold, s.font24, s.fontBlack]}>
          Recent Expenses
        </Font>
        <Pressable style={styles.arrowCont} onPress={() => setIsOpen(!isOpen)}>
          <Font style={[styles.recent, s.font17, s.medium, s.fontBlack]}>
            Recent
          </Font>

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
            return <Item key={item.expense} item={item} />;
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
    maxWidth: 600,
    paddingHorizontal: '3%',
    paddingVertical: 10,
  },
  recent: {},
  heading: {},
  arrow: {
    marginLeft: 6,
  },
  arrowCont: {
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    borderColor: '#C4EAE3',
    borderWidth: 1.5,
    borderRadius: 8,
  },
  close: {
    transform: [{rotateX: '180deg'}],
  },
});
