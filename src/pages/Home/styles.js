import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        alignItems: "center",
    },

    title: {
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    cards: {
        backgroundColor: 'white', 
        borderRadius: 4,
        padding: 10, 
        width: '100%',
    },

    card: {
        marginTop: 10, 
        paddingBottom: 5, 
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
    },

    cardButton: {
        borderColor: 'red', 
        borderWidth: 2,
    },

    cardImage: {
        borderRadius: 50, 
        width: 50, 
        height: 50,
    }
})

export default styles;