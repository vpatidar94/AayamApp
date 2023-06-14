/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';

function TestScreen(prop: any): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Test Screen</Text>
          <Button
            title="Go to Home"
            onPress={() => prop.navigation.navigate('Home')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default TestScreen;
