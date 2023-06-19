/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/home/HomeScreen';
import TestScreen from './screens/test/TestScreen';
import MyCourseScreen from './screens/footerscreens/mycourse/MyCourseScreen';
import DownloadsScreen from './screens/footerscreens/downloads/DownloadsScreen';
import RequestACallScreen from './screens/footerscreens/requestacall/RequestACallScreen';
import ChatWithUsScreen from './screens/footerscreens/chatwithus/ChatWithUsScreen';
import JeeScreen from './screens/courses/jee/JeeScreen';
import CbseBoardScreen from './screens/courses/cbseboard/CbseBoardScreen';
import TestSeriesScreen from './screens/courses/testseries/TestSeriesScreen';
import StudyMaterialScreen from './screens/courses/studymaterial/StudyMaterialScreen';
import QuestionBankScreen from './screens/courses/questionbank/QuestionBankScreen';
import LiveCoursesScreen from './screens/courses/livecourses/LiveCoursesScreen';
import AspireNeetScreen from './screens/courses/neet/aspireneet/AspireNeetScreen';
import MonthlySubscriptionScreen from './screens/coursesubscription/monthlysubscription/MonthlySubscriptionScreen';
import YearlySubscriptionScreen from './screens/coursesubscription/yearlysubscription/YearlySubscriptionScreen';
import NeetSection from './screens/courses/neet/NeetSection';
import { color } from './styles/color';
import DppScreen from './screens/dpp/DppScreen';
import CourseSubscription from './screens/coursesubscription/CourseSubscription';
import AayamLogo from './components/aayamlogo/AayamLogo';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const headerOptions = {
  headerTitle: '',
  headerStyle: {
    backgroundColor: color.primary,
  },
  headerTintColor: color.white,
  headerRight: () => <AayamLogo />,
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
        <Drawer.Screen
          name="NeetSection"
          component={NeetSection}
          options={headerOptions}
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
          // options={{
          //   drawerItemStyle: { height: 0 }
          // }}
          name="DppScreen"
          component={DppScreen}
        />
        <Drawer.Screen
          // 
          options={{
            drawerItemStyle: { height: 0 }
          }}
          name="MyCourse"
          component={MyCourseScreen}
        />
        <Drawer.Screen
          // options={headerOptions}
          options={{
            drawerItemStyle: { height: 0 }
          }}
          name="Downloads"
          component={DownloadsScreen}
        />
        <Drawer.Screen
          // options={headerOptions}
          options={{
            drawerItemStyle: { height: 0 }
          }}
          name="RequestACall"
          component={RequestACallScreen}
        />
        <Drawer.Screen
          // options={headerOptions}
          options={{
            drawerItemStyle: { height: 0 }
          }}
          name="ChatWithUs"
          component={ChatWithUsScreen}
        />
        <Drawer.Screen
          // options={headerOptions}
          options={{
            drawerItemStyle: { height: 0 }
          }}
          name="AspireNeet"
          component={AspireNeetScreen}
        />
        <Drawer.Screen
          // options={headerOptions}
          options={{
            drawerItemStyle: { height: 0 }
          }}
          name="MonthlySubscription"
          component={MonthlySubscriptionScreen}
        />
        <Drawer.Screen
          // options={headerOptions}
          options={{
            drawerItemStyle: { height: 0 }
          }}
          name="YearlySubscription"
          component={YearlySubscriptionScreen}
        />
        
        <Drawer.Screen
          // options={headerOptions}
          options={{
            drawerItemStyle: { height: 0 }
          }}
          name="CourseSubscription"
          component={CourseSubscription}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
