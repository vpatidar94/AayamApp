/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/home/HomeScreen';
import TestScreen from './screens/test/TestScreen';
import {Image} from 'react-native';
import {color} from './styles/color';
import {styles} from './styles/style';

const Drawer = createDrawerNavigator();

const headerOptions = {
  headerTitle: '',
  headerStyle: {
    backgroundColor: color.primary,
  },
  headerTintColor: color.white,
  headerRight: () => (
    <Image style={styles.tinyLogo} source={require('./assets/logo/tiny.jpg')} />
  ),
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={headerOptions}
        />
        <Drawer.Screen
          options={headerOptions}
          name="Test"
          component={TestScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
