import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import color from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default function Login(props) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>

                <View style={{ flex: 5, alignItems: "center", flexDirection: 'column' }}>
                    <Text h1 > Login </Text>
                    <Image
                        source={require('../assets/img/logo_thoth.png')}
                        style={{ width: width*0.5, height: width*0.5, marginTop: 50}}
                    />
                </View>

                <View style={{ flex: 2, flexDirection: 'column', paddingTop: 50 }}>
                    <TextInput
                        placeholder='Username'
                        textContentType='password'
                    />

                    <TextInput
                        placeholder='Password'
                        textContentType='password'
                    />
                    <Button
                        icon={
                            <Icon
                                name="login"
                                size={20}
                                color="white"
                            />
                        }
                        iconRight={true}
                        type='solid'
                        raised={true}
                        title='Login  '
                        onPress={() => { }}
                    />
                </View>

                <View style={{ alignItems: "center", flex: 1 }}>
                    <Text h4>
                        OR
                    </Text>
                    <Button
                        icon={
                            <Icon
                                name="form"
                                size={20}
                                color="white"
                            />
                        }
                        iconRight={true}
                        type='clear'
                        title='Register  '
                        onPress={() => { props.navigation.navigate('register') }}
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
    userProfilePic: {
        resizeMode: 'contain',
        width: width * 0.4,
        height: height * 0.4,
    }
});
