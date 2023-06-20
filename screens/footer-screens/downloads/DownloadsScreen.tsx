import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';

function DownloadsScreen(prop: any): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>All Downloads are here</Text>
          <Button
            title="Go to Home"
            onPress={() => prop.navigation.navigate('Home')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DownloadsScreen