import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CasesTab from './CasesTab';
import {COLORS, FONTS} from '../constants/Theme';
import HealthTipsScreen from '../screens/HealthTipsScreen/HealthTipsScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {Text} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLORS.primary}
      inactiveColor={COLORS.gray}
      backBehavior="none"
      barStyle={{backgroundColor: COLORS.white}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: <Text style={{...FONTS.h4}}>Home</Text>,
          tabBarIcon: ({color}) => (
            <Icon name="local-pharmacy" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Cases"
        component={CasesTab}
        options={{
          tabBarLabel: <Text style={{...FONTS.h4}}>Covid-19 Cases</Text>,

          tabBarIcon: ({color}) => <Icon name="dns" color={color} size={24} />,
        }}
      />

      <Tab.Screen
        name="Health_tips"
        component={HealthTipsScreen}
        options={{
          tabBarLabel: <Text style={{...FONTS.h4}}>Health Tips</Text>,

          tabBarIcon: ({color}) => <Icon name="spa" color={color} size={22} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
