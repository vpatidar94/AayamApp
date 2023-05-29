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

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  return (
    // <SafeAreaView>
    //   <ScrollView contentInsetAdjustmentBehavior="automatic">
    //     <Text>Hello World</Text>
    //   </ScrollView>
    // </SafeAreaView>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Test" component={TestScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
