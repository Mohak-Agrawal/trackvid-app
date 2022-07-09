import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, FONTS} from '../constants/Theme';
import CasesScreen from '../screens/CasesScreen/CasesScreen';

const Tab = createMaterialTopTabNavigator();

const CasesTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {...FONTS.h4},
        tabBarStyle: {backgroundColor: COLORS.primary},
        tabBarIndicatorStyle: {backgroundColor: 'white'},
        tabBarShowIcon: true,
      }}>
      <Tab.Screen
        name="CountryCases"
        component={CasesScreen}
        options={{
          tabBarLabel: 'COUNTRYWISE',
          tabBarIcon: ({color}) => (
            <Icon name="insert-chart" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="StateCases"
        component={CasesScreen}
        options={{
          tabBarLabel: 'STATEWISE',
          tabBarIcon: ({color}) => (
            <Icon name="insert-chart" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CasesTab;
