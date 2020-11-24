import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { Button, Input, Text, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { AntDesign } from "@expo/vector-icons";

import color from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default function CreateSubject(props) {
    const context = props.navigation.getParam('context');
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.subContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name="left" size={36} style={{ flex: 1, marginTop: 5, marginLeft: 5 }} onPress={() => { props.navigation.pop() }} />
                </View>
                <View>
                    <Input
                        placeholder={context + " Name"}
                        containerStyle={{ width: 0.7 * width }}
                    />
                    <TextInput
                        style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 5, width: 0.8 * width }}
                        multiline
                        numberOfLines={10}
                        editable
                        maxLength={9999}
                        placeholder="    Type description here..."
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
                        title={'Create ' + context + '  '}
                        onPress={() => { }}
                        containerStyle={{ marginTop: 20 }}
                        buttonStyle={{backgroundColor: color.color_1, borderRadius: 10}}
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