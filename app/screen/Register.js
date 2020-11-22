import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import color from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default function Register(props) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>

                <View style={{ flex: 2, alignItems: "center" }}>
                    <Text style={styles.header}> Login </Text>
                    <Image
                        source={require('../assets/img/user_placeholder.png')}
                        style={styles.userProfilePic}
                    />
                </View>

                <View style={{ flex: 1 }}>
                    <TextInput
                        placeholder='Username'
                        textContentType='username'
                    />
                    <TextInput
                        placeholder='Password'
                        textContentType='password'
                    />
                    <TextInput
                        placeholder='Confirm Password'
                        textContentType='password'
                    />
                    <Button
                        icon={
                            <Icon
                                name="form"
                                size={20}
                                color="white"
                            />
                        }
                        iconRight={true}
                        type='solid'
                        raised={true}
                        title='Register  '
                        onPress={() => { }}
                    />
                </View>

                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
                        OR
                    </Text>
                    <Button
                        icon={
                            <Icon
                                name="login"
                                size={20}
                                color="white"
                            />
                        }
                        iconRight={true}
                        type='clear'
                        title='Login  '
                        onPress={() => { props.navigation.navigate('login') }}
                    />
                </View>
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
        padding: 10,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    subContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: color.color_4,
        borderRadius: 10,
        alignItems: 'center'
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    userProfilePic: {
        resizeMode: 'contain',
        width: width * 0.4,
        height: height * 0.4,
    }
});
