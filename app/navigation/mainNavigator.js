import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import authenicationNavigator from './authenicationNavigator';
import taggyNav from './TaggyNav';

const mainNavigator = createStackNavigator(
    {
        authenication: {
            screen: authenicationNavigator
        },
        main: {
            screen: taggyNav
        }
    },
    {
        defaultNavigationOptions: {
            headerShown: false,
        }
    }
)

export default createAppContainer(mainNavigator);