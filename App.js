import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, Register, SignIn } from './src/screens';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            options={{
              title: 'Home',
              fullScreenGestureEnabled: true,
              headerShown: false,
            }}
            component={HomeScreen}
          />
          <Stack.Screen name='SignIn' component={SignIn} />
          <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
  },
});
