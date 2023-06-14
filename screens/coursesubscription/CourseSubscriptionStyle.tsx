/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { color } from '../../styles/color';

export const courseSubscriptionStyle = StyleSheet.create({
    subscriptionToggle: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        marginRight: 8,
    },
    activeSubscriptionToggle: {
        backgroundColor: 'black',
    },
    subscriptionToggleText: {
        fontSize: 14,
        color: 'black',
    },
    activeSubscriptionToggleText: {
        color: 'white',
    },
    // Rest of your styles
});
