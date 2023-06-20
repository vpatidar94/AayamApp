import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Footer from '../../../components/footer/Footer';

function JeeScreen(prop: any): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>JEE Screen</Text>
          <Button
            title="Go to Home"
            onPress={() => prop.navigation.navigate('Home')}
          />
        </View>
        <Footer/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default JeeScreen;
