import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../../assets/colors';

const Card = () => {
  return (
    <View style={styles.container}>
      <Text>Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: colors.green1,
  },
});

export default Card;
