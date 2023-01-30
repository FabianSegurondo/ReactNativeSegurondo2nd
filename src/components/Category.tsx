import Icon from "react-native-vector-icons/Ionicons"
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

export const Category = (props: any) => {
    const { title, iconName } = props;

    return (
        <TouchableOpacity style={styles.container}>
            <Icon name={iconName} color="black" size={20} />
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        height:35,
        flexDirection:"row",
        borderRadius:25,
        padding:10,
        margin:10,
        backgroundColor:"white",
        alignItems:"center"
    },
    title: {
        color:"black",
        fontSize:14,
        marginLeft:10
    }
});