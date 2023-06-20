import { StyleSheet } from 'react-native';
import { color } from '../../../styles/color';

export const MonthlyCourseStyle = StyleSheet.create({
    squareStyle: {
        width: '8%',
        height: 24,
        marginRight: '2%',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectTick:{
        fontSize: 16,
        fontWeight: 'bold',
        color: color.green
    },
    purchasingItem: {
        textAlign: 'justify',
        fontSize: 14,
    },
    itemPrice: {
        textAlign: 'center',
        fontSize: 14
    },
    totalPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
        backgroundColor: color.primary,
        height: 30,
        padding: 5
    }
})
