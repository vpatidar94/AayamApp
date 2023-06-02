import React from 'react';
import {Button, SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const footerOption = [
    {
      url: 'https://reactjs.org/logo-og.png',
      option: 'MyCourse',
      text: 'My Course'
    },
    {
      url: 'https://reactjs.org/logo-og.png',
      option: 'Downloads',
      text: 'Downloads'
  
    },
    {
      url: 'https://reactjs.org/logo-og.png',
      option: 'RequestACall',
      text: 'Request Call'
  
    },
    {
      url: 'https://reactjs.org/logo-og.png',
      option: 'ChatWithUs',
      text: 'Chat with us'
  
    },
  ]

function Footer(prop: any): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}> */}
        <View style={StyleSheet.compose(
          {
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
          styles.footerButton
        )}>
          {footerOption.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity onPress={() => prop.navigation.navigate(item.option)}>
                  <Image
                    source={{
                      uri: item.url,
                      cache: 'only-if-cached',
                    }}
                    style={{ width: 40, height: 20 }}
                  />
                  <Text style={{ textAlign: 'center', fontSize: 12 }}>{item.text}</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    image: {
      width: '100%',
      height: '70%',
      resizeMode: 'cover',
      borderRadius: 5,
    },
    footerButton: {
      marginTop: 10,
      fontSize: 8,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    // it is for Find your course search bar
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default Footer
