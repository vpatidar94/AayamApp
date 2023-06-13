import { StyleSheet } from "react-native";
import { color } from "../../styles/color";

export const FooterStyle = StyleSheet.create({
    footerButton: {
        flex:1,
        flexDirection: 'row',
        marginTop: 20,
        fontSize: 8,
        fontWeight: 'bold',
    },
    footerImage: {
        alignSelf:"center",
        width: '60%',
        height: 50,
        
    },
    footerText: {
        fontSize: 14,
        fontWeight: "bold",
        color: color.black,
        alignSelf:"center"
    }
});