import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { Button, Input, Text, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import color from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default function Profile(props) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>

                <Avatar
                    rounded
                    source={{
                        uri:
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XiQW__qCu3J1HsR0QupIaerXSeiNTG2DBA&usqp=CAU',
                    }}
                    containerStyle={{ width: width * 0.5, height: width * 0.5 }}
                />

                <View>
                    <Text h4>Achievement</Text>
                    <View></View>
                </View>
                <View>
                    <Text h4>Trophies</Text>
                    <View></View>
                </View>

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
                        onPress={() => {props.navigation.navigate('subjDetail')}}
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