import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import Login from '../screen/Login';
import Register from '../screen/Register';
import Welcome from '../screen/Welcome';
import Profile from '../screen/Profile';

const authenNavigator = createStackNavigator(
    {
        welcome: {
            screen: Welcome
        },
        register: {
            screen: Register
        },
        login: {
            screen: Login
        },
        profile: {
            screen: Profile
        }
    },
    {
        defaultNavigationOptions: {
            headerShown: false,
        }
    }
)

export default authenNavigator;