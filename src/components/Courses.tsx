import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import { CourseFrame } from "./CourseFrame";

export const Courses = (props: any) => {

    const listCourses = [
        {
            id: "1",
            image: require("../assets/1.png"), 
            title: "Design Thinking Fundamental", 
            teacher: "Robert Fox", 
            price:"150", 
            annotation: "Best Seller"
        },
        {
            id: "2",
            image: require("../assets/2.png"), 
            title: "Flutter Class - Amateur Class", 
            teacher: "Wade Warren", 
            price:"24", 
            annotation: "Recomended"
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.tittle}>
                    Popular course
                </Text>
                <Text style={styles.seeAll}>
                    See All
                </Text>
            </View>

            <FlatList
                    data={listCourses}
                    keyExtractor={(course) => course.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}

                    renderItem={({ item }) => <CourseFrame course={item} />}
                />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 35,
        marginTop:10,
        marginHorizontal:5
    },
    titleContainer:{
        height:30,
        //backgroundColor:"cyan",
        marginHorizontal:15,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        right:0,
        left:0
    },
    tittle:{
        fontSize:22,
        color:"black",
        fontWeight:"500"
    },
    seeAll:{
        fontSize:15,
        color: "#0e9bbb",
    }
});
