import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MyNavigator from './navigation/mainNavigator';
import userReducer from './store/reducer/userReducer';

const rootReducer = combineReducers({
    user: userReducer
})

const store = createStore(rootReducer);

export default function App() {
    return <Provider store={store}><MyNavigator /></Provider>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
