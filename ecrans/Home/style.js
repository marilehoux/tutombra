import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

const dashboardStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white',
        
    },

    userName: {
        fontSize: 20,
    },  
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
    },
});

export default dashboardStyles;