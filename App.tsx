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
import MyCourseScreen from './screens/mycourse/MyCourseScreen';
import DownloadsScreen from './screens/downloads/DownloadsScreen';
import RequestACallScreen from './screens/requestacall/RequestACallScreen';
import ChatWithUsScreen from './screens/chatwithus/ChatWithUsScreen';
import NeetUgScreen from './screens/neetug/NeetUgScreen';
import JeeScreen from './screens/jee/JeeScreen';
import CbseBoardScreen from './screens/cbseboard/CbseBoardScreen';
import TestSeriesScreen from './screens/testseries/TestSeriesScreen';
import StudyMaterialScreen from './screens/studymaterial/StudyMaterialScreen';
import QuestionBankScreen from './screens/questionbank/QuestionBankScreen';
import LiveCoursesScreen from './screens/livecourses/LiveCoursesScreen';
import AspireNeetScreen from './screens/aspireneet/AspireNeetScreen';
import MonthlySubscriptionScreen from './screens/monthlysubscription/MonthlySubscriptionScreen';
import YearlySubscriptionScreen from './screens/yearlysubscription/YearlySubscriptionScreen'; 
import NeetSection from './screens/neet/NeetSection';
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
    <Image style={styles.tinyLogo} source={require('./assets/logo/logo1.jpg')} />
  ),
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
        name="NeetSection" 
        component={NeetSection}  
        options={headerOptions} 
        />
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
        <Drawer.Screen
          options={headerOptions}
          name="NeetUg"
          component={NeetUgScreen}
        />
        <Drawer.Screen
          options={headerOptions}
          name="Jee"
          component={JeeScreen}
        />
        <Drawer.Screen
          options={headerOptions}
          name="CbseBoard"
          component={CbseBoardScreen}
        />
        <Drawer.Screen
          options={headerOptions}
          name="TestSeries"
          component={TestSeriesScreen}
        />
        <Drawer.Screen
          options={headerOptions}
          name="StudyMaterial"
          component={StudyMaterialScreen}
        />
        <Drawer.Screen
          options={headerOptions}
          name="QuestionBank"
          component={QuestionBankScreen}
        />
        <Drawer.Screen
          options={headerOptions}
          name="LiveCourses"
          component={LiveCoursesScreen}
        />
        <Drawer.Screen
          options={headerOptions}
          name="MyCourse"
          component={MyCourseScreen}
        />
        <Drawer.Screen
          options={headerOptions}
          name="Downloads"
          component={DownloadsScreen}
        />
        <Drawer.Screen
          options={headerOptions}
          name="RequestACall"
          component={RequestACallScreen}
        />
        <Drawer.Screen
          options={headerOptions}
          name="ChatWithUs"
          component={ChatWithUsScreen}
        />
        <Drawer.Screen
          options={headerOptions}
          name="AspireNeet"
          component={AspireNeetScreen}
        />
        <Drawer.Screen
          options={headerOptions}
          name="MonthlySubscription"
          component={MonthlySubscriptionScreen}
        />
        <Drawer.Screen
          options={headerOptions}
          name="YearlySubscription"
          component={YearlySubscriptionScreen}
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
