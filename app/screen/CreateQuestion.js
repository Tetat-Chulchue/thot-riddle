import React, { Component, useState } from 'react';
import { StyleSheet, View, Dimensions, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { Button, Input, Text, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux';

import color from '../constants/colors';
import Question from '../model/Question';
import { createQuestion } from '../store/action/userAction';

const { width, height } = Dimensions.get('window');

export default function CreateQuiz(props) {

    const dispatch = useDispatch();

    const subject = props.navigation.getParam("subject");
    const chapter = props.navigation.getParam("chapter");
    const quiz = props.navigation.getParam("quiz");

    const [question, setQuestion] = useState('');
    const [isChoise, setIsChoise] = useState(false);
    const [isFill, setIsFill] = useState(false);
    const [type, setType] = useState('');


    const [is1, setIs1] = useState(false);
    const [is2, setIs2] = useState(false);
    const [is3, setIs3] = useState(false);
    const [is4, setIs4] = useState(false);
    const [choise2, setChoise2] = useState('');
    const [choise3, setChoise3] = useState('');
    const [choise1, setChoise1] = useState('');
    const [choise4, setChoise4] = useState('');
    const [correctIndex, setCorrectIndex] = useState(0);


    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.subContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name="left" size={36} style={{ flex: 1, marginTop: 5, marginLeft: 5 }} onPress={() => { }} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput
                        style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 5, width: 0.8 * width }}
                        multiline
                        numberOfLines={5}
                        editable
                        maxLength={9999}
                        placeholder="    Type description here..."
                        onChangeText={(text) => {setQuestion(text)}}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <CheckBox
                            title='Choise'
                            checked={isChoise}
                            onPress={() => {
                                setIsChoise(true);
                                setIsFill(false)
                                setType('choise')
                            }}
                            containerStyle={{ flex: 1, backgroundColor: color.color_5, borderRadius: 10, borderColor: color.color_5 }}
                        />
                        <CheckBox
                            title='Fill in the blank'
                            checked={isFill}
                            onPress={() => {
                                setIsChoise(false);
                                setIsFill(true)
                                setType('fill')
                            }}
                            containerStyle={{ flex: 1, backgroundColor: color.color_5, borderRadius: 10, borderColor: color.color_5 }}
                        />
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Input
                                placeholder='Choise #1'
                                disabled={isFill}
                                containerStyle={{ flex: 19 }}
                                onChangeText={(text) => {setChoise1(text)}}
                            />
                            <CheckBox
                                checked={is1}
                                onPress={() => {
                                    setIs1(true);
                                    setIs2(false);
                                    setIs3(false);
                                    setIs4(false)
                                    setCorrectIndex(0)
                                }}
                                containerStyle={{ flex: 1 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Input
                                placeholder='Choise #2'
                                disabled={isFill}
                                containerStyle={{ flex: 19 }}
                                onChangeText={(text) => {setChoise2(text)}}
                            />
                            <CheckBox
                                checked={is2}
                                onPress={() => {
                                    setIs1(false);
                                    setIs2(true);
                                    setIs3(false);
                                    setIs4(false)
                                    setCorrectIndex(1)
                                }}
                                containerStyle={{ flex: 1 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Input
                                placeholder='Choise #3'
                                disabled={isFill}
                                containerStyle={{ flex: 19 }}
                                onChangeText={(text) => {setChoise3(text)}}
                            />
                            <CheckBox
                                checked={is3}
                                onPress={() => {
                                    setIs1(false);
                                    setIs2(false);
                                    setIs3(true);
                                    setIs4(false)
                                    setCorrectIndex(2)
                                }}
                                containerStyle={{ flex: 1 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Input
                                placeholder='Choise #4'
                                disabled={isFill}
                                containerStyle={{ flex: 19 }}
                                onChangeText={(text) => {setChoise4(text)}}
                            />
                            <CheckBox
                                checked={is4}
                                onPress={() => {
                                    setIs1(false);
                                    setIs2(false);
                                    setIs3(false);
                                    setIs4(true)
                                    setCorrectIndex(3)
                                }}
                                containerStyle={{ flex: 1 }}
                            />
                        </View>
                    </View>
                    <Button
                        icon={
                            <Icon
                                name="pluscircleo"
                                size={20}
                                color="white"
                            />
                        }
                        iconRight={true}
                        type='solid'
                        raised={true}
                        title="Add   "
                        onPress={() => {
                            dispatch(createQuestion(subject, chapter, quiz, new Question(question, type, [choise1, choise2, choise3, choise4], correctIndex)))
                        }}
                        containerStyle={{ marginTop: 20 }}
                        buttonStyle={{ backgroundColor: color.color_1, borderRadius: 10 }}
                    />
                    <Button
                        icon={
                            <Icon
                                name="check"
                                size={20}
                                color="white"
                            />
                        }
                        iconRight={true}
                        type='solid'
                        raised={true}
                        title="Done   "
                        onPress={() => { props.navigation.popToTop() }}
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