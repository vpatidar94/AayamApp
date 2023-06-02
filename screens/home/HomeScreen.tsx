import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Footer from '../../components/footer/Footer';
import { courseList } from '../../const/CourseList';

const carouselImage = [
  require('../../assets/carousel/carousel-1.png'), require('../../assets/carousel/carousel-2.jpg'), require('../../assets/carousel/carousel-3.jpg'), require('../../assets/carousel/carousel-4.jpg'), require('../../assets/carousel/carousel-5.png'), require('../../assets/carousel/carousel-6.png'), require('../../assets/carousel/carousel-7.png'), require('../../assets/carousel/carousel-8.png'),
]

function HomeScreen(prop: any): JSX.Element {
  const [text, onChangeText] = useState('');
  const width = Dimensions.get('window').width; // for carousel
  return (
    <SafeAreaView style={styles.container}>
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
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  justifyContent: 'center',
                }}
              >
                <Image source={item}
                  style={{ width: width, height: 200 }} />
              </View>
            )}
          />
        </View>
        {/* this the section of Courses */}
        <View style={{ width: '100%', marginTop: 20, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          {courseList.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity onPress={() => prop.navigation.navigate(item.option)}>
                  <Image
                    source={{
                      uri: item.url,
                      cache: 'only-if-cached',
                    }}
                    style={{ width: 70, height: 80, margin: 10 }}
                  />
                  <Text style={{ textAlign: 'center', fontSize: 12 }}>{item.option}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        {/* Here below one dummy image is added in place of image to be added */}
        <View>
          <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={{ height: 200, marginBottom: 20, marginTop: 20 }} />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Find Your Course'
        />
        {/* now button portion of footer */}
        <Footer />
      </ScrollView>
    </SafeAreaView >
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


export default HomeScreen;