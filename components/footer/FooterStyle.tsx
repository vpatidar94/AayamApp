import { StyleSheet } from "react-native";

export const FooterStyle = StyleSheet.create({
    footerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        fontSize: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    footerImage: {
        width: '60%',
        height: 20
    },
    footerText: {
        textAlign: 'center',
        fontSize: 12
    }
});