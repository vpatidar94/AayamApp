import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  // Add global styles here
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  commonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  // Header logo
  tinyLogo: {
    marginEnd: 20,
  },
  //particular course heading
  courseHeading: {
    color:"blue",
    fontSize:18,
    marginTop:8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  //option Title
  optionTitle:{
    fontSize: 16,
    fontWeight: '600'
  },
  optionHeading1:{
    fontSize: 14,
    fontWeight: '600'
  },
  optionHeading2:{
    fontSize: 12,
    fontWeight: '600'
  },
  //for footer
  footerButton: {
    marginTop: 10,
    fontSize: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
