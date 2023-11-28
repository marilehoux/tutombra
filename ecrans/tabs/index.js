import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Messages from '../Messages';
import Parametres from '../Parametres';

const BottomTabs = () => {
    const Tab = createMaterialBottomTabNavigator();
  return (
    
        <Tab.Navigator
            initialRouteName="tabs_home"
            barStyle={{ backgroundColor: 'lightgrey' }}
            color="white"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                activeColor: 'red',
                headerShown: false,
                inactiveColor: 'grey',
            }}
        >
          <Tab.Screen
            name="tabs_home"
            component={Home}
            options={{
              tabBarLabel: 'Dashboard',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="tabs_Home1"
            component={Messages}
            options={{
              tabBarLabel: 'Messages',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="chat" color={color} size={size} />
              ),
              tabBarBadge: 1,
            }}
          />
          <Tab.Screen
            name="tabs_home2"
            component={Parametres}
            options={{
              tabBarLabel: 'Paramètres',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-settings-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      );
  
}

export default BottomTabs