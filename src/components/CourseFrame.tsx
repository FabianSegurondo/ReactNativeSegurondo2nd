

import Icon from "react-native-vector-icons/Ionicons"
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

export const CourseFrame = (props: any) => {
    const { course } = props;
    const { image, title, teacher, price, annotation } = course;
    //console.log(props);

    return (
        <View style={styles.container}>
            <Image
                source={image}
                style={styles.imagen}
            />
            <Text style={styles.title}>
                {title}
            </Text>
            <View style={styles.teacherContainer}>
                <Icon name="person-outline" color="gray" size={15} />
                <Text style={styles.teacher}>
                    {teacher}
                </Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.price}>
                    ${price}
                </Text>
                <View style={styles.annotationContainer}>
                    <Text style={styles.annotation}>
                        {annotation}
                    </Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical:20,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    imagen: {
        width: 230,
        height: 150,
        borderRadius:30
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "black"
    },
    teacherContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    teacher:{
        fontSize:14,
        color:"gray",
        marginLeft:5
    },
    infoContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    price:{
        fontSize:20,
        color:"#0e9bbb",
        fontWeight:"bold"
    },
    annotationContainer:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#A2D8F7",
        padding:7,
        marginLeft:10,
        borderRadius:30,
    },
    annotation:{
        fontSize:12,
        color:"#7cabf9",
        fontWeight:"bold"
    }

});