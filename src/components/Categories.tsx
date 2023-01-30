import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Category } from "./Category";


export const Categories = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.tittle}>
                    Categories
                </Text>
                <Text style={styles.seeAll}>
                    See All
                </Text>
            </View>
            <ScrollView
                style={styles.ScrollView}
                horizontal
                showsHorizontalScrollIndicator={false}>
                <Category title="Artes" iconName="image-outline" />
                <Category title="Programming" iconName="laptop-outline" />
                <Category title="Designing" iconName="brush-outline" />
                <Category title="Finance" iconName="body-outline" />
                <Category title="Business" iconName="business-outline" />
            </ScrollView>
            <ScrollView
                style={styles.ScrollView}
                horizontal
                showsHorizontalScrollIndicator={false}>
                <Category title="Logistics" iconName="cash-outline" />
                <Category title="Physic" iconName="calculator-outline" />
                <Category title="Fitness" iconName="barbell-outline" />
                <Category title="Music" iconName="headset-outline" />
                <Category title="Language" iconName="text-outline" />
            </ScrollView>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 15,
        marginTop: 10,
        marginHorizontal: 5
    },
    titleContainer: {
        height: 30,
        //backgroundColor:"cyan",
        marginHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        right: 0,
        left: 0
    },
    tittle: {
        fontSize: 22,
        color: "black",
        fontWeight: "500"
    },
    seeAll: {
        fontSize: 15,
        color: "#0e9bbb",
    },
    ScrollView: {

    }
});