import { FlatList, ScrollView, Text } from 'react-native';
import React from 'react';
import Card from './Card';

const Home = () => {
  const data = [0, 1, 2, 3, 4];
  return (
    <FlatList
      style={{ paddingTop: 8 }}
      data={data}
      renderItem={(item) => <Card />}
    ></FlatList>
  );
};

export default Home;
