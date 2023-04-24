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
    width: '100%',
    // height: '100%',
  },
  card: {
    width: '100%',
    maxWidth: 350,
  },
  cardImage: {
    width: '100%',
    maxWidth: 350,
    minWidth: 300,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  balance: {
    left: 85,
    bottom: 110,
    position: 'absolute',
    zIndex: 100,
  },
});
