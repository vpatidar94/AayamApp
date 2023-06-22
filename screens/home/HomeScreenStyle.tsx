import { StyleSheet } from 'react-native';
import { color } from '../../styles/color';

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
    borderWidth: 1,
    padding: 10,
    color: color.black,
  },
  courseBlock: {
    width: '100%',
    marginTop: '10%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    flexWrap: 'wrap'
  },
  courseImageBackground: {
    backgroundColor: color.primary,
    borderRadius: 100,
    marginRight: 6
  },
  courseImageStyle: {
    width: 40,
    height: 40,
    margin: 20,
    backgroundColor: color.primary,
    alignSelf: "center"
  },
  courseText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: color.black,
    marginBottom: 20,
    marginTop: 10
  }
});