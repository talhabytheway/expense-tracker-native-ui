import {StyleSheet, Image, View, Pressable} from 'react-native';
import React, {useState} from 'react';

import images from '../../assets';
import Font from '../Font';
import s from '../../styles/global';

const RecentExp = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <View style={[styles.parent]}>
      <Font style={[styles.heading, s.bold, s.font26, s.fontBlack]}>
        Recent Expenses
      </Font>
      <Pressable style={styles.arrowCont} onPress={() => setIsOpen(!isOpen)}>
        <Font style={[styles.recent, s.font18, s.medium, s.fontBlack]}>
          Recent
        </Font>

        <Image
          source={images.arrowD}
          style={[styles.arrow, !isOpen && styles.close]}
        />
      </Pressable>
    </View>
  );
};

export default RecentExp;

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 600,
    paddingHorizontal: 20,
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
