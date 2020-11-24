import React, { Component, useState } from 'react';
import { StyleSheet, View, Dimensions, TextInput, KeyboardAvoidingView, Image, Alert } from 'react-native';
import { Button, Input, Text, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';

import color from '../constants/colors';
import User from '../model/User';
import { login } from '../store/action/userAction';

const { width, height } = Dimensions.get('window');

export default function Login(props) {

    const allUsers = useSelector( (state) => state.user.users);

    const dispatch = useDispatch()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [isTeacher, setIsTeacher] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    const [role, setRole] = useState();

    const registerHandler = (username, password, confirmPassword) => {
        if ((confirmPassword === password) && (password !== "")) {
            let user = new User(allUsers.length + 1,  username, password, role);
            dispatch(login(user));
            props.navigation.navigate('profile');
        } else {
            Alert.alert(
                "Error",
                "Password amd confirm password mismatch",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.subContainer} behavior='position' keyboardVerticalOffset='-500'>
                <Text h1 style={{alignSelf: 'center'}}> Register </Text>
                <Image
                    source={require('../assets/img/logo_thoth.png')}
                    style={{ width: width * 0.4, height: width * 0.4, alignSelf: 'center', marginTop: 10 }}
                />
                <View style={{ flexDirection: 'column', paddingTop: 50, flex: 1, width: width * 0.8}}>
                    <Input
                        placeholder='Username'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                        onChangeText={(text) => { setUsername(text) }}
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                        onChangeText={(text) => { setPassword(text) }}
                    />
                    <Input
                        placeholder='Confirm Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                        onChangeText={(text) => { setconfirmPassword(text) }}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            title='Teacher'
                            checked={isTeacher}
                            onPress={() => {
                                setIsTeacher(true);
                                setIsStudent(false);
                                setRole('teacher')
                            }}
                            containerStyle={{ flex: 1, backgroundColor: color.color_5, borderRadius: 10, borderColor: color.color_5 }}
                        />
                        <CheckBox
                            title='Student'
                            checked={isStudent}
                            onPress={() => {
                                setIsTeacher(false);
                                setIsStudent(true);
                                setRole('student')
                            }}
                            containerStyle={{ flex: 1, backgroundColor: color.color_5, borderRadius: 10, borderColor: color.color_5 }}
                        />
                    </View>
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
                        onPress={() => { registerHandler(username, password, confirmPassword) }}
                        containerStyle={{ marginTop: 20 }}
                        buttonStyle={{backgroundColor: color.color_2, borderRadius: 10}}
                    />
                </View>

                <View style={{ alignItems: "center" }}>
                    <Text h4>
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
