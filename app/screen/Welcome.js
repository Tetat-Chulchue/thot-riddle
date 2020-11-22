import React, { Component, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';
import color from '../constants/colors';

export default function Welcome(props) {

    const fadingValue = useRef(new Animated.Value(0)).current;

    const introAnimation = () => {
        Animated.timing(fadingValue, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false
        }).start();
    };

    useEffect(() => {
        introAnimation();
    });

    return (
        <TouchableOpacity style={styles.container} onPress={() => { props.navigation.navigate('login') }}>
            <View style={{ flex: 1 }} />

            <Animated.View style={{ opacity: fadingValue, flex: 1 }}>
                <Logo />
            </Animated.View>

            <Animated.Text style={{
                flex: 1,
                fontSize: 30,
                fontWeight: 'bold',
                paddingTop: 10,
                opacity: fadingValue,
            }}>
                Thoth's Riddle
            </Animated.Text>

            <View style={{ flex: 1 }} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.color_4,
        alignItems: 'center',
    },
});
