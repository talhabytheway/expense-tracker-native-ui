import {
  Pressable,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import NavExp from '../components/navExp/NavExp';
import Button from '../components/button/Button';
import Font from '../components/Font';
import Calender from '../assets/svg/Calender';
import Graph from '../assets/svg/Graph';
import ArrowPink from '../assets/svg/ArrowPink';
import Category from '../components/Category/Category';
import ratios from '../styles/ratios';

let {widthPixel, heightPixel, fontPixel} = ratios;

const Expense = prop => {
  const [active, setActive] = useState([true, false]);
  const [time, setTime] = useState('W');
  const [day, setDay] = useState('Fri');
  let positionY = 0;
  const scrollViewRef = useRef();

  const handleScrollTo = () => {
    positionY += 170;
    scrollViewRef.current.scrollTo({x: positionY, animated: true});
  };
  return (
    <View style={styles.parent}>
      <View style={styles.parentSec}>
        <NavExp {...prop} />
        <View style={styles.btnPar}>
          <Pressable onPress={() => setActive([true, false])} style={{flex: 1}}>
            <Button title="Expenses" isActive={active[0]} />
          </Pressable>
          <Pressable onPress={() => setActive([false, true])} style={{flex: 1}}>
            <Button title="Income" isActive={active[1]} />
          </Pressable>
        </View>
        <View style={styles.textCont}>
          <Font style={styles.currBal}>Current Balance</Font>
          <Font style={styles.text}>$5679.34</Font>
        </View>
        <View style={styles.timePar}>
          <Pressable onPress={() => setTime('D')}>
            <Font style={styles.timeT(time == 'D')}>Day</Font>
          </Pressable>
          <Pressable onPress={() => setTime('W')}>
            <Font style={styles.timeT(time == 'W')}>Week</Font>
          </Pressable>
          <Pressable onPress={() => setTime('M')}>
            <Font style={styles.timeT(time == 'M')}>Month</Font>
          </Pressable>
          <Pressable onPress={() => setTime('Y')}>
            <Font style={styles.timeT(time == 'Y')}>Year</Font>
          </Pressable>
          <View
            style={{
              justifyContent: 'space-around',
            }}>
            <Calender />
          </View>
        </View>
        <Graph style={styles.graph} />
      </View>
      <View style={styles.parsec}>
        <View style={styles.catPar}>
          <View style={styles.dayPar}>
            <Pressable onPress={() => setDay('Mon')}>
              <Font style={styles.dayT(day == 'Mon')}>Mon</Font>
            </Pressable>
            <Pressable onPress={() => setDay('Tue')}>
              <Font style={styles.dayT(day == 'Tue')}>Tue</Font>
            </Pressable>
            <Pressable onPress={() => setDay('Wed')}>
              <Font style={styles.dayT(day == 'Wed')}>Wed</Font>
            </Pressable>
            <Pressable onPress={() => setDay('Thu')}>
              <Font style={styles.dayT(day == 'Thu')}>Thu</Font>
            </Pressable>
            <Pressable onPress={() => setDay('Fri')}>
              <Font style={styles.dayT(day == 'Fri')}>Fri</Font>
            </Pressable>
            <Pressable onPress={() => setDay('Sat')}>
              <Font style={styles.dayT(day == 'Sat')}>Sat</Font>
            </Pressable>
            <Pressable onPress={() => setDay('Sun')}>
              <Font style={styles.dayT(day == 'Sun')}>Sun</Font>
            </Pressable>
          </View>
          <View style={styles.categoryPar}>
            <Font style={styles.category}>Categories</Font>
            <TouchableOpacity onPress={() => handleScrollTo()}>
              <ArrowPink />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{alignItems: 'center'}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={2000}
          onScroll={event => {
            positionY = event.nativeEvent.contentOffset.x;
          }}
          ref={scrollViewRef}
          style={styles.categoriesPar}>
          <Category type="Taxi" amount="870.45" selected={true} />
          <Category type="Health" amount="1100.50" selected={false} />
          <Category type="Food" amount="600.43" selected={false} />
          <Category type="Travel" amount="340.43" selected={false} />
          <Category type="Taxi" amount="870.45" selected={false} />
          <Category type="Health" amount="1100.50" selected={false} />
          <Category type="Food" amount="600.43" selected={false} />
          <Category type="Travel" amount="340.43" selected={false} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Expense;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  parentSec: {
    backgroundColor: '#0C0D5B',
    flex: 6.2,
  },
  parsec: {
    backgroundColor: '#fff',
    flex: 3.8,
  },
  btnPar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: widthPixel(4),
    width: '100%',
    height: '19%',
  },
  textCont: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '22%',
    borderBottomColor: '#4A4983',
    borderBottomWidth: widthPixel(1.5),
  },
  currBal: {
    fontSize: fontPixel(20),
    fontFamily: 'Mulish-Black',
    textAlign: 'center',
    color: '#BFBFD3',
  },
  text: {
    fontSize: fontPixel(41),
    fontFamily: 'Mulish-Bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: heightPixel(20),
  },
  timePar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '12%',
    paddingHorizontal: widthPixel(40),
    alignSelf: 'center',
  },
  timeT: bool => ({
    fontSize: fontPixel(17),
    color: bool ? '#FDB2AD' : '#C6EDE5',
    fontFamily: bool ? 'Mulish-Black' : 'Mulish-Bold',
  }),
  dayPar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: widthPixel(15),
  },
  dayT: bool => ({
    paddingVertical: heightPixel(5),
    fontSize: bool ? fontPixel(18) : fontPixel(16),
    color: bool ? '#0C0D5B' : '#B1BCCD',
    fontFamily: bool ? 'Mulish-Black' : 'Mulish-Regular',
  }),
  category: {
    fontFamily: 'Mulish-Bold',
    fontSize: fontPixel(28),
    color: '#27272A',
  },
  categoryPar: {
    flexDirection: 'row',
    paddingHorizontal: widthPixel(15),
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '65%',
    marginTop: heightPixel(6),
  },
  catPar: {
    height: '35%',
  },
  categoriesPar: {
    flexGrow: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
  },
});
