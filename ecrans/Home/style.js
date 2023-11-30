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
    //stymiser la flatlist
    scrollableList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    scrollableListItem: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        margin: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 4,
    },
});

export default dashboardStyles;