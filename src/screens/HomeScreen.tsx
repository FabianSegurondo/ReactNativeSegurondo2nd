import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import { Categories } from '../components/Categories';
import { Courses } from '../components/Courses';
import { GreetingUser } from '../components/GreetingUser';

export const ScreenHome = (props: any) => {
    console.log(props);
    return (
        <View style={styles.container}>
            <GreetingUser/>
            <Courses/>
            <Categories/>
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "f4f4f4"
    },
    
})