import { StyleSheet } from 'react-native';
import { color } from '../../styles/color';

export const AspireNeetDescriptionStyle = StyleSheet.create({
    mainOption: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontSize: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subHeading: {
        fontSize: 18,
        fontWeight: '700',
        color: color.black,
    },
    optionContainer: {
        padding: 4,
        margin: 5,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.primary,
        borderRadius: 4,
    },
    listDataStyle: {
        fontWeight: '700',
        marginBottom: 5,
        marginLeft: 15,
        color:'#fa8072',

    },
    square: {
        width: '3%',
        height: '55%',
        backgroundColor: color.secondary,
        marginRight: 5,
        borderRadius: 5,
        
    },
    sectionHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    sectionHeaderTitle: {
        fontSize: 14,
        color:color.black,
        fontWeight:'600',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: "10%",
        borderRadius: 8,
        width: '90%',
        maxHeight: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
        zIndex: 1,
      },
      closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
      },
      otherDetails: {
        color: color.black
      }

});
