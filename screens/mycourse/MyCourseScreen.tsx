import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../../styles/style';
import { color } from '../../styles/color';
import { myCourseOptionList } from '../../const/MyCourseOptionList';
import { myCourseScreenStyle } from './MyCourseScreenStyle';
import Footer from '../../components/footer/Footer';


const Separator = () => <View style={styles.separator} />;

function MyCourseScreen(prop: any): JSX.Element {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>('1');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [selectedLectureId, setSelectedLectureId] = useState<string | null>(null);

  const handleOptionClick = (optionId: string) => {
    setSelectedOptionId(optionId);
    setSelectedSubjectId(null);
    setSelectedChapterId(null);
    setSelectedLectureId(null);
  };

  const handleSubjectClick = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    setSelectedChapterId(null);
    setSelectedLectureId(null);
  };

  const handleChapterClick = (chapterId: string) => {
    setSelectedChapterId(chapterId);
    setSelectedLectureId(null);
  };

  const handleLectureClick = (lectureId: string) => {
    setSelectedLectureId(lectureId);
  };

  const selectedOptionData = myCourseOptionList.find((option) => option.id === selectedOptionId);
  const selectedSubjectData =
    selectedOptionData?.subject.find((subject) => subject.id === selectedSubjectId) || null;

  return (
    <SafeAreaView style={styles.commonContainer}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={[styles.sectionTitle, { color: color.secondary }, { marginTop: 8 }]}>My Course Screen</Text>
        </View>
        <View>
          <Image
            source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={{ height: 200, marginBottom: 20, marginTop: 20 }}
          />
        </View>
        <Separator />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {myCourseOptionList.map((option) => (
            <TouchableOpacity key={option.id} onPress={() => handleOptionClick(option.id)}>
              <View style={[option.id === selectedOptionId && { backgroundColor: color.primary, padding: 4, borderRadius: 5 }]}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{option.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <Separator />
        {selectedSubjectData === null && (
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row' }}>
              {selectedOptionData?.subject.map((subject) => (
                <TouchableOpacity key={subject.id} onPress={() => handleSubjectClick(subject.id)}>

                  <View style={myCourseScreenStyle.subjectBlock} >
                    <Text style={myCourseScreenStyle.subjectText}>{subject.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

        )}
        {selectedSubjectData !== null && selectedChapterId === null && (
          <View>
            {selectedSubjectData.chapters.map((chapter) => (
              <TouchableOpacity key={chapter.id} onPress={() => handleChapterClick(chapter.id)}>
                <View style={myCourseScreenStyle.chapterBlock}>
                  <Text style={myCourseScreenStyle.chapterText}>{chapter.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {selectedChapterId !== null && selectedLectureId === null && (
          <View >
            {selectedSubjectData?.chapters.map((chapter) => {
              if (chapter.id === selectedChapterId) {
                return chapter.lectures.map((lecture) => (
                  <TouchableOpacity key={lecture.id} onPress={() => handleLectureClick(lecture.id)}>
                    <View style={myCourseScreenStyle.lectureBlock}>
                      <Text style={myCourseScreenStyle.lectureText}>{lecture.name}</Text>
                    </View>
                  </TouchableOpacity>
                ));
              }
              return null;
            })}
          </View>
        )}
        {selectedLectureId !== null && (
          <View>
            {selectedSubjectData?.chapters.map((chapter) => {
              if (chapter.id === selectedChapterId) {
                return chapter.lectures.map((lecture) => {
                  if (lecture.id === selectedLectureId) {
                    return lecture.videos.map((video) => (
                      <TouchableOpacity key={video.id}>
                        <View style={myCourseScreenStyle.videoBlock}>
                          <Text style={myCourseScreenStyle.videoText}>{video.name}</Text>
                        </View>
                      </TouchableOpacity>
                    ));
                  }
                  return null;
                });
              }
              return null;
            })}
          </View>
        )}
        {/* <Footer navigation={prop.navigation} /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
export default MyCourseScreen;

