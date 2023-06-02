import React from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';

function NeetUgScreen(prop: any): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>NEET UG Screen</Text>
          <Button
            title="Go to NEET ASPIRE-XI Details"
            onPress={() => prop.navigation.navigate('AspireNeet')}
          />
          <Button
            title="Go to Home"
            onPress={() => prop.navigation.navigate('Home')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default NeetUgScreen;
