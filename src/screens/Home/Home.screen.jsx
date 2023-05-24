import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Home, Navbar, Post } from './components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  const TAB_ICON = {
    home: 'home',
    post: 'post-add',
    network: 'people',
    notification: 'notifications',
    jobs: 'cases',
  };

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <MaterialIcons name={iconName} size={size} color={color} />
      ),
      headerShown: false,
      tabBarActiveBackgroundColor: '#7fbb7d',
      tabBarActiveTintColor: 'white',
      tabBarLabel: route.name,
    };
  };

  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name='home' component={Home} />
        <Tab.Screen name='post' component={Post} />
        <Tab.Screen name='network' component={Post} />
        <Tab.Screen name='notification' component={Post} />
        <Tab.Screen name='jobs' component={Post} />
      </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#c9c992',
  },
});
