import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ImagePropTypes } from 'react-native';

import color from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default function Login(props) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.header}> Login </Text>
                <Image
                    source={require('../assets/img/user_placeholder.png')}
                    style={styles.userProfilePic}
                />
                <TextInput
                    placeholder='Username'
                    textContentType='username'
                    style={styles.form}
                />
                <TextInput
                    placeholder='Password'
                    textContentType='password'
                    style={styles.form}
                />
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    OR
                </Text>
                <Button
                    title='Register'
                    onPress={() => { props.navigation.navigate('register') }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.color_5,
        alignItems: 'center',
        paddingTop: 20,
        flexDirection: 'collumn',
        alignItems: 'stretch',
        padding: 10,
    },
    subContainer: {
        padding: 10,
        backgroundColor: color.color_4,
        borderRadius: 10,
        alignItems: 'center'
    },
    form: {
        borderBottomColor: '#000'
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        flex: 1,
    },
    userProfilePic: {
        resizeMode: 'contain',
        width: width * 0.4,
        height: height * 0.4,
    }
});
