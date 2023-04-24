import {Pressable, View, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import NavExp from '../components/navExp/NavExp';
import Button from '../components/button/Button';
import Font from '../components/Font';
import Calender from '../assets/svg/Calender';
import Graph from '../assets/svg/Graph';
import ArrowPink from '../assets/svg/ArrowPink';
import Category from '../components/Category/Category';

const Expense = prop => {
  const [active, setActive] = useState([true, false]);
  const [time, setTime] = useState('W');
  const [day, setDay] = useState('Fri');
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
          <View style={{justifyContent: 'space-around', maxWidth: 500}}>
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
            <ArrowPink />
          </View>
        </View>
        <ScrollView horizontal={true} style={styles.categoriesPar}>
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
    flex: 6,
  },
  parsec: {
    backgroundColor: '#fff',
    flex: 4,
  },
  btnPar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    width: '100%',
    height: '19%',
    maxWidth: 600,
  },
  textCont: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '19%',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    borderBottomColor: '#4A4983',
    width: '100%',
    borderBottomWidth: 1.5,
  },
  timePar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '13.6%',
    paddingHorizontal: 30,
    alignSelf: 'center',
    maxWidth: 600,
  },
  graph: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  timeT: bool => ({
    fontSize: 15,
    color: bool ? '#FDB2AD' : '#C6EDE5',
    fontFamily: bool ? 'Mulish-Black' : 'Mulish-Bold',
  }),
  dayPar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    maxWidth: 600,
    height: '35%',
    paddingHorizontal: 15,
  },
  dayT: bool => ({
    padding: 5,
    fontSize: bool ? 16 : 14,
    color: bool ? '#0C0D5B' : '#B1BCCD',
    fontFamily: bool ? 'Mulish-Black' : 'Mulish-Regular',
  }),
  category: {
    fontFamily: 'Mulish-Bold',
    fontSize: 26,
    color: '#27272A',
  },
  categoryPar: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '65%',
    marginTop: 6,
  },
  catPar: {
    height: '35%',
  },
  categoriesPar: {
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
  },
});
