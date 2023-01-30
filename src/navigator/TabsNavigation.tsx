import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons"
import { ScreenHome } from "../screens/HomeScreen";
import { MyCoursescreen } from "../screens/MyCoursescreen";
import { WishlistScreen } from "../screens/WishlistScreen";
import { AccountScreen } from "../screens/AccountScreen";


const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen name="ScreenHome"
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="navigate-circle-outline" color="gray" size={25} />
                    ),
                }}
                component={ScreenHome} />

            <Tab.Screen name="MyCoursescreen"
                options={{
                    tabBarLabel: 'My Course',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="play-circle-outline" color="gray" size={25} />
                    ),
                }}
                component={MyCoursescreen} />

            <Tab.Screen name="WishlistScreen"
                options={{
                    tabBarLabel: 'Wishlist',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart-outline" color="gray" size={25} />
                    ),
                }}
                component={WishlistScreen} />

            <Tab.Screen name="AccountScreen"
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person-outline" color="gray" size={25} />
                    ),
                }}
                component={AccountScreen} />

        </Tab.Navigator>
    )
}