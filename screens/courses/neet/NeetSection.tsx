import React from 'react';
import { stylesNeet } from './NeetSectionStyle';
import { Button, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../../styles/style';
import { color } from '../../../styles/color';
import { courses } from '../../../const/NeetSectionCourseList';
import { eklavyaCourses } from '../../../const/NeetSectionCourseList';

function NeetSection(prop: any): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={[styles.sectionTitle, { marginTop: 10, textAlign: 'center' }]}>NEET</Text>

          <View style={stylesNeet.container}>
            {courses.map((option, index) => (
              <View key={index}>
                <TouchableOpacity onPress={() => prop.navigation.navigate(option.screen)}>
                  <View
                    style={[
                      stylesNeet.optionContainer,
                      { backgroundColor: color.primary },
                    ]}
                  >
                    <Text
                      style={[
                        styles.optionTitle,
                        styles.highlight,
                        { color: color.theme_white },
                      ]}
                    >
                      {option.title}
                    </Text>
                    <Text style={[styles.optionHeading1, { color: color.black }]}>
                      {option.heading1}
                    </Text>
                    <Text style={[styles.optionHeading2, { color: color.dark }]}>
                      {option.heading2}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* Eklavya Courses */}
          <View style={stylesNeet.container}>
            {eklavyaCourses.map((option, index) => (
              <View key={index}>
                <TouchableOpacity onPress={() => prop.navigation.navigate(option.screen)}>
                  <View
                    style={[
                      stylesNeet.optionContainer,
                      { backgroundColor: color.primary },
                    ]}
                  >
                    <Text
                      style={[
                        styles.optionTitle,
                        styles.highlight,
                        { color: color.theme_white },
                      ]}
                    >
                      {option.title}
                    </Text>
                    <Text style={[styles.optionHeading1, { color: color.black }]}>
                      {option.heading1}
                    </Text>
                    <Text style={[styles.optionHeading2, { color: color.black }]}>
                      {option.subject}
                    </Text>
                    <Text style={[styles.optionHeading2, { color: color.dark }]}>
                      {option.heading2}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          {/* banner */}
          <View>
            <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
              style={{ height: 200, margin: 10 }} />
          </View>

          {/* About Neet */}
          <View style={{ margin: 10 }}>
            <Text style={styles.sectionTitle}>About NEET</Text>
            <Text style={[styles.sectionDescription, { textAlign: 'justify' }]}>NEET stands for National Eligibility cum Entrance Test. It is a single-level national exam carried out for medical aspirants enabling them to seek admissions to medical courses across different medical institutes of the country.
              {'\n'} {'\n'}From the year 2020 onwards, the exam has emerged as the only medical entrance exam that has to be qualified to seek admission even to AIIMS and JIPMER institutes thereby scrapping the multiple entrance exams that were carried out previously at state levels.
              {'\n'} {'\n'}The government of India introduced NEET as a plan to conduct one exam replacing multiple exams that were being conducted as part of the One Nation One Examination policy. NEET is an offline test carried out in a pen-paper mode, standing as the only medical entrance exam at UG level, to be following this model.</Text>
          </View>

          {/* Testimonials */}
          <Text style={[styles.sectionTitle, { margin: 10, textAlign: 'left' }]}>Testimonials</Text>
          <View style={stylesNeet.container}>
            <View>
              <TouchableOpacity onPress={() => prop.navigation.navigate('Test')}>
                <Image
                  source={{
                    uri: 'https://reactjs.org/logo-og.png',
                    cache: 'only-if-cached',
                  }}
                  style={{ width: 80, height: 80, margin: 10 }}
                />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center' }}>NEET</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => prop.navigation.navigate('Test')}>
                <Image
                  source={{
                    uri: 'https://reactjs.org/logo-og.png',
                    cache: 'only-if-cached',
                  }}
                  style={{ width: 80, height: 80, margin: 10 }}
                />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center' }}>NEET</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => prop.navigation.navigate('Test')}>
                <Image
                  source={{
                    uri: 'https://reactjs.org/logo-og.png',
                    cache: 'only-if-cached',
                  }}
                  style={{ width: 80, height: 80, margin: 10 }}

                />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center' }}>NEET</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}




export default NeetSection;