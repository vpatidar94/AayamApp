import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Footer from '../../components/footer/Footer';
import { courseList } from '../../const/CourseList';
import { styles } from '../../styles/style';
import { color } from '../../styles/color';
import { HomeStyle } from './HomeScreenStyle';
import { carouselImage } from '../../const/CarouselImagesList';

function HomeScreen(prop: any): JSX.Element {
  const [text, onChangeText] = useState('');
  const width = Dimensions.get('window').width; // for carousel
  return (
    <SafeAreaView style={styles.commonContainer}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* here below is carousel portion */}
        <View style={{ flex: 1 }}>
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={carouselImage}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <View style={{ flex: 1, borderWidth: 1, justifyContent: 'center', }}>
                <Image source={item}
                  style={{ width: width, height: 200 }} />
              </View>
            )}
          />
        </View>
        <View style={HomeStyle.courseBlock}>
          {courseList.map((item, index) => {
            return (
              <View>
                <View key={index} style={HomeStyle.courseImageBackground}>
                  <TouchableOpacity onPress={() => prop.navigation.navigate(item.option)}>
                    <Image
                      source={
                        item.url
                      }
                      style={HomeStyle.courseImageStyle}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={HomeStyle.courseText}>{item.option}</Text>
              </View>
            );
          })}
        </View>
        {/* Here below one dummy image is added in place of image to be added */}
        <View>
          <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={{ height: 180, marginBottom: 20, marginTop: 20 }} />
        </View>
        <TextInput
          style={HomeStyle.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Find Your Course'
        />
        {/* button portion of footer */}
        <Footer navigation={prop.navigation} />
      </ScrollView>
    </SafeAreaView >
  );
};

export default HomeScreen;