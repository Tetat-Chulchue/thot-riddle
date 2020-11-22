import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import color from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default function Login(props) {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.subContainer} behavior='position' keyboardVerticalOffset='-500'>
                <Text h1 > Login </Text>
                <Image
                    source={require('../assets/img/logo_thoth.png')}
                    style={{ width: width * 0.4, height: width * 0.4, marginTop: 50 }}
                />
                <View style={{ flexDirection: 'column', paddingTop: 50, flex: 1}}>
                    <TextInput
                        placeholder='Username'
                        textContentType='username'
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
                        containerStyle={{marginTop: 20}}
                    />
                </View>

                <View style={{ alignItems: "center"}}>
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
            </KeyboardAvoidingView>
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
});
