import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons"
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

export const GreetingUser = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Hi, Dimas
                </Text>

                <Image
                    source={require("../assets/Hand.png")}
                    style={styles.wavingHand}
                />
            </View>
            <Text style={styles.message}>
                Let's start learning!
            </Text>
            <View style={styles.searchBar}>
                <View style={styles.searchIconView}>
                    <Icon name="search-outline" color="gray" size={25} />
                </View>
                <Text style={styles.searchText}>
                    Search for anything
                </Text>
            </View>

            <View style={styles.iconsContainer}>
                <View style={styles.iconContainer}>
                    <Icon name="cart-outline" color="white" size={20} />
                </View>
                <View style={styles.iconContainer}>
                    <Icon name="notifications-outline" color="white" size={20} />
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 20,
        //backgroundColor: "#0979b0",
        //backgroundColor: "#14beb9",
        backgroundColor: "#0e9bbb",
        borderRadius: 30,
        margin: 5
    },
    titleContainer: {
        width: 130,
        height: 30,
        position: "absolute",
        top: 25,
        left: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontWeight: "600",
        fontSize: 22,
        color: "white",
    },
    wavingHand: {
        height: 20,
        width: 20,
    },
    message: {
        position: "absolute",
        left: 20,
        top: 60,
        color: "white",
        fontSize: 16
    },
    searchBar: {
        height: 55,
        marginHorizontal: 20,
        borderRadius: 15,
        position: "absolute",
        backgroundColor: "#f4f4f4",
        flexDirection: "row",
        bottom: 15,
        right: 0,
        left: 0,
        alignItems: "center"
    },
    searchIconView: {
        marginHorizontal: 15
    },
    searchText: {
        color: "gray",
        fontSize: 16
    },

    iconsContainer: {
        width: 100,
        height: 40,
        position: "absolute",
        top: 25,
        right: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    iconContainer: {
        height: 40,
        width: 40,
        backgroundColor: "#0979b0",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    }
})