import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
} from "react-native";
// import CustomHeaderButton from "../components/CustomHeaderButton";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
import color from '../constants/colors';
const { width, height } = Dimensions.get('window');
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

export default function SubjectDetail(props) {

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.subHeader}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => { props.navigation.pop() }}>
                        <AntDesign name="left" size={24} color="black" style={{ flex: 1 }}/>
                    </TouchableOpacity>
                    {/* <AntDesign name="left" size={24} color="black" style={{ flex: 1 }} onPress={() => { props.navigation.pop() }}/> */}
                    <TouchableOpacity style={styles.bttn} onPress={() => { props.navigation.navigate('createSubject') }}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>Create Subject</Text>
                    </TouchableOpacity>
                    {/* <Button title="Create Subject" type="clear" style={styles.bttn}/> */}
                </View>
                <View style={styles.search}>
                    <TextInput
                        placeholder="Search"
                        textContentType="none"
                        style={styles.form}
                    />
                    <AntDesign name="search1" size={24} color="black" style={{ flex: 1 }} />
                </View>
                <View style={styles.nani}>
                    <TouchableOpacity style={styles.bttn2} onPress={() => { props.navigation.navigate('miniSubjDetail', {id: '1'}) }}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Subject 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} onPress={() => { props.navigation.navigate('miniSubjDetail', {id: '2'}) }}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Subject 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} onPress={() => { props.navigation.navigate('miniSubjDetail', {id: '3'}) }}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Subject 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} onPress={() => { props.navigation.navigate('miniSubjDetail', {id: '4'}) }}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Subject 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} onPress={() => { props.navigation.navigate('miniSubjDetail', {id: '5'}) }}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Subject 5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} onPress={() => { props.navigation.navigate('miniSubjDetail', {id: '6'}) }}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Subject 6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} onPress={() => { props.navigation.navigate('miniSubjDetail', {id: '7'}) }}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Subject 7</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bttn: {
        // backgroundColor: "lightgrey",
        // borderColor: "white",
        // borderWidth: 2,
        // padding: 2,
        // alignItems: "center",
        // // alignSelf: "flex-end",
        // flex: 1,
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
        flex: 11,
    },
    bttn2: {
        backgroundColor: "lightgrey",
        borderColor: "white",
        borderWidth: 2,
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
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
        margin: 3,
        alignItems: "stretch",
        marginLeft: "5%",
        marginRight: "5%",
    },
    search: {
        flexDirection: "row",
        alignItems: "center",
        // width: "100%",
        // marginBottom: "7%",
        flex: 1,
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
        borderBottomColor: '#000',
        padding: 5,
        flex: 9,
        // textDecorationLine: "underline",
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

// export default SubjectDetail;
