import { createStackNavigator } from '@react-navigation/stack';
import { ScreenHome } from '../screens/HomeScreen';
export const StackNavigation = () => {

    const Stack = createStackNavigator();
    return (
        < Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="ScreenHome" options={{ title: "Home" }} component={ScreenHome} />
        </Stack.Navigator>
    );
}