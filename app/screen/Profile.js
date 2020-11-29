import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { Button, Input, Text, Avatar, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

import color from '../constants/colors';
import { login } from '../store/action/userAction';

const { width, height } = Dimensions.get('window');

export default function Profile(props) {

    const dispatch = useDispatch()

    const user = useSelector((state) => state.user.currentUser);

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>

                <Avatar
                    rounded
                    source={{
                        uri:
                            user.profileImage,
                    }}
                    containerStyle={{ width: width * 0.5, height: width * 0.5, marginTop: 15, marginBottom: 10}}
                />

                <View>
                    <Text h3> Welcome, {user.username} </Text>
                </View>
                {/* <View>
                    <Text h4>Achievement</Text>
                    <View></View>
                </View>
                <View>
                    <Text h4>Trophies</Text>
                    <View></View>
                </View> */}

                <View>
                    <Button
                        icon={
                            <Icon
                                name="subject"
                                size={15}
                                color="white"
                            />
                        }
                        title="   Select Subject"
                        buttonStyle={{ backgroundColor: color.color_5 }}
                        containerStyle={{ margin: 10 }}
                        onPress={() => { props.navigation.navigate('subjDetail') }}
                    />
                    <Button
                        icon={
                            <Icon
                                name="history"
                                size={15}
                                color="white"
                            />
                        }
                        title="   History"
                        buttonStyle={{ backgroundColor: color.color_5 }}
                        containerStyle={{ margin: 10 }}
                        onPress={() => { props.navigation.navigate('history') }}
                    />
                    <Button
                        title="Logout"
                        buttonStyle={{ backgroundColor: color.color_5 }}
                        containerStyle={{ margin: 10 }}
                        onPress={() => {
                            props.navigation.popToTop();
                        }}
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
        flexDirection: 'column',
        flex: 1,
        padding: 10,
        backgroundColor: color.color_4,
        borderRadius: 10,
        alignItems: 'center'
    },
});
