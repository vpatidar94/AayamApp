/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { color } from '../../styles/color';

export const myCourseScreenStyle = StyleSheet.create({
    subjectBlock: {
      backgroundColor: color.lightslategrey,
      opacity: 0.4, // to give transparency to the background color
      paddingTop: 38,
      paddingBottom:38,
      paddingRight: 18,
      paddingLeft: 18,
      borderRadius: 5,
      marginBottom: 8,
      marginEnd: 8,
      width: 200,
    },
    subjectText: {
      fontSize: 18,
      textAlign: 'center',
      fontWeight: '900',
      color:color.black,
    },
    chapterBlock: {
      backgroundColor: color.lightslategrey,
      opacity: 0.4,
      padding: 8,
      borderRadius: 5,
      marginBottom: 8,
    },
    chapterText: {
      fontSize: 16,
      fontWeight: 'bold',
      color:color.black,
    },
    lectureBlock: {
      backgroundColor: color.lightslategrey,
      opacity: 0.4,
      padding: 8,
      borderRadius: 5,
      marginBottom: 8,
    },
    lectureText: {
      fontSize: 16,
      fontWeight: 'bold',
      color:color.black,
    },
    videoBlock: {
      backgroundColor: color.lightslategrey,
      opacity: 0.4,
      padding: 8,
      borderRadius: 5,
      marginBottom: 8,
    },
    videoText: {
      fontSize: 16,
      fontWeight: 'bold',
      color:color.black,
    },
  });
