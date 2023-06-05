import {StyleSheet} from 'react-native';

export const HomeStyle = StyleSheet.create({

    image: {
      width: '100%',
      height: '70%',
      resizeMode: 'cover',
      borderRadius: 5,
    },
  
    // it is for Find your course search bar
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    courseBlock: {
        width: '100%', 
        marginTop: 20, 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexWrap: 'wrap' 
    }
  });