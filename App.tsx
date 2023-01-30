import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { TabsNavigation } from './src/navigator/TabsNavigation';


const App = () => {
  return (
    <NavigationContainer>
      <TabsNavigation/>
    </NavigationContainer>
  );
};


export default App;