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
        fontWeight: '900',
        marginBottom: 5,
        marginLeft: 15,

    },
    square: {
        width: 8,
        height: 8,
        backgroundColor: color.grey,
        marginRight: 5,
        borderRadius: 8,
    },
    sectionHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    sectionHeaderTitle: {
        fontSize: 14,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: '80%',
        maxHeight: '80%',
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

});
