import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Footer from '../../components/footer/Footer';
import { courseList } from '../../const/CourseList';
import { styles } from '../../styles/style';
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
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image source={item} style={{ width: width, height: 200 }} />
              </View>
            )}
          />
        </View>
        <View style={HomeStyle.courseBlock}>
          {courseList.map((item, index) => {
            return (
              <View key={index}>
                <View style={HomeStyle.courseImageBackground}>
                  <TouchableOpacity
                    onPress={() => prop.navigation.navigate(item.option)}>
                    <Image
                      source={item.url}
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
          <Image
            source={{ uri: 'https://img.freepik.com/free-vector/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration_1284-29493.jpg?w=1060&t=st=1687246376~exp=1687246976~hmac=11740afa50c4b6b993bd940db9841d062d62f2791c38bd5072f6d082dafa5615' }}
            style={styles.bannerImage}
          />
        </View>
        <TextInput
          style={HomeStyle.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Find Your Course"
        />
        {/* button portion of footer */}
        <Footer navigation={prop.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
