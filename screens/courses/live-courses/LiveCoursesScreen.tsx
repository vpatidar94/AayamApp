/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
// import AspireNeetDescription from '../../components/aspireneetdescription/AspireNeetDescription';

function LiveCoursesScreen(prop: any): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Live Courses Screen</Text>
          <Button
            title="Go to Home"
            onPress={() => prop.navigation.navigate('Home')}
          />
        </View>
        {/* <AspireNeetDescription/> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default LiveCoursesScreen;
