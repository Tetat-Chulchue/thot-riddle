import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import authenicationNavigator from './authenicationNavigator';

const mainNavigator = createStackNavigator(
    {
        authenication: {
            screen: authenicationNavigator
        }
    },
    {
        defaultNavigationOptions: {
            headerShown: false,
        }
    }
)

export default createAppContainer(mainNavigator);