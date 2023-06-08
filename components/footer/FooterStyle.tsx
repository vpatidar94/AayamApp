import { StyleSheet } from "react-native";
import { color } from "../../styles/color";

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
        height: 50,
        marginLeft:"20%"
        
    },
    footerText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: "bold",
        color: color.black,
    }
});