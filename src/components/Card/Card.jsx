import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import images from '../../assets';
import Font from '../Font';
import s from '../../styles/global';

const Card = ({navigation}) => {
  return (
    <View style={styles.parent}>
      <View style={[styles.card]}>
        <Font style={[s.fontWhite, s.font32, s.eBold, styles.balance]}>
          $5679.34
        </Font>
        <Pressable onPress={() => console.log('add')} style={styles.btn} />
        <Pressable onPress={() => navigation.navigate('Expense')}>
          <Image source={images.card} style={styles.cardImage} />
        </Pressable>
      </View>
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
  },
  card: {
    width: 370,
  },
  cardImage: {
    height: 220,
    width: 370,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  balance: {
    left: 85,
    bottom: 75,
    position: 'absolute',
    zIndex: 100,
  },
  btn: {
    width: 60,
    height: 60,
    zIndex: 100,
    bottom: 80,
    left: 7,
    position: 'absolute',
  },
});
