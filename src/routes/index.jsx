import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../pages/Home';
import Form from '../pages/Form';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#121212',
                    borderTopColor: 'transparent'
                },
                tabBarActiveTintColor:'#c7c7c7',
                tabBarInactiveTintColor:'white',
                shifting: true,
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Icon name="home" size={20} color={'#ddd'} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Form" 
                component={Form}
                options={{
                    tabBarLabel: 'Form',
                    tabBarIcon: () => (
                        <Icon name="wpforms" size={20} color={'#ddd'} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
