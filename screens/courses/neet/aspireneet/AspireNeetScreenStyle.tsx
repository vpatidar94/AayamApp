import { StyleSheet } from 'react-native';
import { color } from '../../../../styles/color';

export const AspireNeetStyle = StyleSheet.create({
    subscriptionToggle: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: color.black,
        borderRadius: 8,
        // marginRight: 8,
    },
    activeSubscriptionToggle: {
        backgroundColor: color.black,
    },
    subscriptionToggleText: {
        fontSize: 14,
        color: color.black,
    },
    activeSubscriptionToggleText: {
        color: color.white,
    },
});
