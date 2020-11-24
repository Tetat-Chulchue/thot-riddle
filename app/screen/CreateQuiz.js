import React, { Component, useState } from 'react';
import { StyleSheet, View, Dimensions, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { Button, Input, Text, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux';

import color from '../constants/colors';
import { createQuiz } from '../store/action/userAction';
import Exercise from '../model/Exercise';


const { width, height } = Dimensions.get('window');

export default function CreateQuiz(props) {

    const dispatch = useDispatch();

    const [isQuiz, setIsQuiz] = useState(false);
    const [isExercise, setIsExercise] = useState(false);
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const chapter = props.navigation.getParam("chapter");
    const subject = props.navigation.getParam("subject");

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.subContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name="left" size={36} style={{ flex: 1, marginTop: 5, marginLeft: 5 }} onPress={() => { props.navigation.pop() }} />
                </View>
                <View>
                    <Input
                        placeholder="Exercise Name"
                        containerStyle={{ width: 0.7 * width }}
                        onChangeText={(text) => {setName(text)}}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            title='Quiz'
                            checked={isQuiz}
                            onPress={() => {
                                setIsExercise(false);
                                setIsQuiz(true)
                                setType('quiz')
                            }}
                            containerStyle={{ flex: 1, backgroundColor: color.color_5, borderRadius: 10, borderColor: color.color_5}}
                        />
                        <CheckBox
                            title='Exercise'
                            checked={isExercise}
                            onPress={() => {
                                setIsExercise(true);
                                setIsQuiz(false)
                                setType('exercise')
                            }}
                            containerStyle={{ flex: 1, backgroundColor: color.color_5, borderRadius: 10, borderColor: color.color_5}}
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
                        title="Next   "
                        onPress={() => {
                            let quiz = new Exercise(name, type, []);
                            dispatch(createQuiz(subject, chapter[0], quiz))
                            props.navigation.navigate('CreateQuestion', {subject: subject, chapter: chapter[0], quiz: quiz}) 
                        }}
                        containerStyle={{ marginTop: 20 }}
                        buttonStyle={{ backgroundColor: color.color_1, borderRadius: 10 }}
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