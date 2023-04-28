import {View} from 'react-native';
import g from '../styles/global';
import Nav from '../components/navbar/Navbar';
import Card from '../components/card/Card';
import Send from '../components/send/Send';
import RecentExp from '../components/recentExp/RecentExp';
import React from 'react';
import ratios from '../styles/ratios';

const Home = prop => {
  return (
    <View style={[g.f1, g.bgWhite]}>
      <View style={{flex: 5.2, marginBottom: ratios.widthPixel(13)}}>
        <Nav />
        <Card {...prop} />
      </View>
      <View style={{flex: 4.8}}>
        <Send />
        <RecentExp />
      </View>
    </View>
  );
};

export default Home;
