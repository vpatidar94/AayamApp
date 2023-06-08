import React from 'react';
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image,} from 'react-native';
import { footerOption } from '../../const/FooterOptionList';
import { FooterStyle } from './FooterStyle';

function Footer(prop: any): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={FooterStyle.footerButton}>
          {footerOption.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity onPress={() => prop.navigation.navigate(item.option)}>
                  <Image
                    source={{
                      uri: item.url,
                      cache: 'only-if-cached',
                    }}
                    style={FooterStyle.footerImage}
                  />
                  <Text style={FooterStyle.footerText}>{item.text}</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Footer
