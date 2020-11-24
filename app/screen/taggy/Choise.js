import React, { useState, useEffect }  from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    Image,
    Dimensions,
    Alert,
    TouchableOpacity,
} from "react-native";
// import CustomHeaderButton from "../components/CustomHeaderButton";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
import color from '../../constants/colors';
const { width, height } = Dimensions.get('window');
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
// import IsQuiz from './IsQuiz';
// import { IsRight } from './IsQuiz';
import { ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';


const Choise = (props) => {
    const [bg, setBG] = useState(['lightgrey', 'lightgrey', 'lightgrey', 'lightgrey']);
    const [count, setCount] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const choise = props.type;
    const final = props.final;
    const quesIndex = props.quesIndex;
    if(quesIndex == final - 1){
        props.end(count)
        // Alert.alert(
        //     "Congratulation!",
        //     "You have answer correct for " + count + " question!",
        //     [
        //         { text: "OK", onPress: () => console.log("Im on fire") }
        //     ],
        //     { cancelable: false }
        // );
    }
    let a = '';
    const questions = props.questions;
    const answer = props.answer;
    // console.log(questions);
    // console.log(answer);
    // let abc;
    // if (abc == an)
    let exPart;
    const isQuiz = props.isQuiz;
    useEffect(() =>{
        setBG(['lightgrey', 'lightgrey', 'lightgrey', 'lightgrey']);
        setIsAnswered(false);
    }, [questions])
    const IsRight = function (answer, index) {
        let new_bg ='';
        console.log(isAnswered)
        if (!isAnswered) {
            if(index == answer){
                new_bg = ['lightgrey', 'lightgrey', 'lightgrey', 'lightgrey']
                new_bg[index] = "green"
                console.log(new_bg)
                setIsAnswered(true)
                setCount(count + 1);
                return new_bg;
            }else if(index != answer){
                new_bg = ['lightgrey', 'lightgrey', 'lightgrey', 'lightgrey']
                new_bg[index] = "red";
                new_bg[answer] = "green";
                console.log(new_bg)
                setIsAnswered(true)
                return new_bg;
            }
        } else {
            return bg;
        }
    }

    if (isQuiz === 'exercise'){
        exPart = (
            <View style={styles.blacky}>
                <TouchableOpacity style={styles.bttn3} >
                    <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Check</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bttn3} >
                    <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }else{
        exPart = (
                    <View style={styles.blacky}>
                        <TouchableOpacity style={styles.bttn3} >
                            <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                )
    }

    if (choise == "choise"){
        return (
            <View style={styles.nani}>
                {
                    questions.map((element, index) => (
                        <ListItem key={index} bottomDivider containerStyle={{
                            backgroundColor: bg[index],
                            borderColor: "white",
                            borderWidth: 2,
                            padding: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingBottom: 15,
                            paddingTop: 15,
                            margin: 3,
                            alignItems: "stretch",
                            marginLeft: "5%",
                            marginRight: "5%",
                        }} onPress={() => { setBG(IsRight(answer, index))}}>
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>{element}</Text>
                            </TouchableOpacity>
                        </ListItem>
                    ))
                }
                {/* {exPart} */}
            </View>)
    } else {
        return (
            <View style={styles.nani}>
                <TextInput placeholder="Type your answer here..." textContentType="none" style={styles.form}/>
                {/* {exPart} */}
            </View>
        )
    }
};


        
const styles = StyleSheet.create({
    bttn: {
        backgroundColor: "lightgrey",
        borderColor: "white",
        borderWidth: 2,
        padding: 2,
        alignItems: "center",
        alignSelf: "flex-end",
        flex: 5,
        marginRight: "5%",
    },
    nani: {
        flex: 4,
    },
    blacky: {
        flex: 2,
    },
    bttn2: {
        backgroundColor: "lightgrey", // กูแก้ตรงนี้เพราะมึงพิมพ์ว่า whitegrey แล้ว react แม่งประสาทแดกไรไม่รู้กูหานานมากอีสัส - Shib@
        borderColor: "white",
        borderWidth: 2,
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        paddingTop: 15,
        margin: 3,
        alignItems: "stretch",
        marginLeft: "5%",
        marginRight: "5%",
    },
    bttn3: {
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: 2,
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        paddingTop: 15,
        margin: 3,
        alignItems: "stretch",
        marginLeft: "5%",
        marginRight: "5%",
    },
    search: {
        flexDirection: "column",
        alignItems: "center",
        // width: "100%",
        // marginBottom: "3%",
        flex: 2,
        marginLeft: "5%",
        marginRight: "5%",
    },
    subHeader: {
        flexDirection: "row",
        // alignItems: 'Left',
        // width: "100%",
        marginBottom: "5%",
        // flex: 1,
        // alignItems: 'stretch',
    },
    back: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        marginRight: 30,
        alignSelf: "flex-start",
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: color.color_5,
        // alignItems: 'center',
        paddingTop: 20,
        flexDirection: "column",
        // alignItems: 'stretch',
        padding: 10,
    },
    subContainer: {
        padding: 10,
        backgroundColor: color.color_4,
        borderRadius: 10,
        flex: 1,
        marginTop: "3%",
        marginBottom: "3%",
        // alignItems: 'center'
    },
    form: {
        // borderBottomColor: '#000',
        // padding: 5,
        // flex: 9,
        // textDecorationLine: "underline",
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2,
        padding: 5,
        // paddingLeft: 15,
        // paddingRight: 15,
        // paddingBottom: 15,
        // paddingTop: 15,
        margin: 3,
        alignItems: "stretch",
        // alignSelf: "flex-start",
        marginLeft: "5%",
        marginRight: "5%",
        flex: 1,
    },
    header: {
        fontSize: 20,
        // fontWeight: 'bold',
        alignItems: "flex-start",
        flex: 1,
        margin: 2,
    },
    userProfilePic: {
        resizeMode: "contain",
        width: width * 0.4,
        height: height * 0.4,
    }
});

export default Choise;
