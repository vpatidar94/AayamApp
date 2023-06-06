import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/style';
import { color } from '../../styles/color';
import { myCourseOptionList } from '../../const/MyCourseOptionList';
import Footer from '../../components/footer/Footer';

const Separator = () => <View style={styles.separator} />;
function MyCourseScreen(prop: any): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const selectedContent = myCourseOptionList.find((option) => option.id === selectedOption);

  return (
    <SafeAreaView style={styles.commonContainer}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View >
          <Text style={[styles.sectionTitle, { color: color.secondary }, { marginTop: 8 }]}>My Course Screen</Text>
        </View>
        {/* this is Banner image */}
        <View>
          <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={{ height: 200, marginBottom: 20, marginTop: 20 }} />
        </View>
        <Separator />
        <View style={{
          flexDirection: 'row',
          justifyContent: "space-around",
        }}>
          {myCourseOptionList.map((option) => (
            <TouchableOpacity key={option.id} onPress={() => handleOptionClick(option.id)}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{option.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Separator />
        {selectedContent && (
          <View>
            {selectedContent.content.map((item) => (
              <View key={item.title}>
                <Image source={{ uri: item.url }} style={{ height: 200 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: "center" }}>{item.title}</Text>
              </View>
            ))}
          </View>
        )}
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}
export default MyCourseScreen;