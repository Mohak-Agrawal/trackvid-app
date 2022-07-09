import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeTab from './HomeTab';
import TipsDetailsScreen from '../screens/TipsDetailsScreen/TipsDetailsScreen';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="TipsDetails" component={TipsDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
