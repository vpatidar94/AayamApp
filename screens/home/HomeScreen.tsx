import React from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';

function HomeScreen(prop: any): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Test"
            onPress={() => prop.navigation.navigate('Test')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
