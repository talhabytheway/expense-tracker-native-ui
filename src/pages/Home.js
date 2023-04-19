import {View} from 'react-native';
import g from '../styles/global';
import Nav from '../components/navbar/Navbar';
import Card from '../components/card/Card';
import Send from '../components/send/Send';
import RecentExp from '../components/recentExp/RecentExp';
import React from 'react';

const Home = prop => {
  return (
    <View style={[g.f1, g.bgWhite]}>
      <View style={[g.f05]}>
        <Nav />
        <Card {...prop} />
      </View>
      <View style={[g.f05]}>
        <Send />
        <RecentExp />
      </View>
    </View>
  );
};

export default Home;
