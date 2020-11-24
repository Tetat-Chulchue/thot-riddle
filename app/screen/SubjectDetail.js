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
import { useSelector } from 'react-redux';
// import SubList from "../components/SubList";
import { ListItem } from 'react-native-elements'

// const SubList = ({ listData, navigation }) => {
//     const renderMealItem = (itemData) => {
//       return (
//         //เขียนโค้ดเพิ่ม
//         <MealItem
//           title={itemData.item.title}
//           duration={itemData.item.duration}
//           complexity={itemData.item.complexity}
//           affordability={itemData.item.affordability}
//           image={itemData.item.imageUrl}
//           onSelectMeal={() => {
//             // เขียนโค้ดเพิ่ม
//             navigation.navigate("S3", {
//               id: itemData.item.id,
//               mealTitle: itemData.item.title,
//             });
//           }}
//         />
//       );
//     };


export default function SubjectDetail(props) {
    const data = useSelector( (state) => state.user.data);
    const user = useSelector( (state) => state.user.currentUser);
    // const displayedSub = data.filter(
    //     (meal) => meal.categoryIds.indexOf(catId) >= 0
    //   );
    // console.log(data.map());
    let execlusive;
    if (user.role === 'teacher'){
        execlusive = (
            <TouchableOpacity onPress={() => { props.navigation.navigate('createSubject', {context: "Subject"}) }} style={styles.bttn3}>
                <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Create Subject</Text>
            </TouchableOpacity>
        )
    }else{
        execlusive = (<TouchableOpacity ></TouchableOpacity>)
    }
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.subHeader}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => { props.navigation.pop() }}>
                        <AntDesign name="left" size={24} color="black" style={{ flex: 1 }}/>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.bttn} onPress={() => { props.navigation.navigate('createSubject', {context: 'Subject'})}}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>Create Subject</Text>
                    </TouchableOpacity> */}
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
                    {
                        data.map((element, index) => (
                            <ListItem key={index} bottomDivider  containerStyle={styles.bttn2} >
                                {/* <ListItem.Content> */}
                                    <TouchableOpacity onPress={() => { props.navigation.navigate('miniSubjDetail', { name: element.name, detail: element.detail, chapters: element.chapters }) }} >
                                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>{element.name}</Text>
                                    </TouchableOpacity>
                                {/* </ListItem.Content> */}
                            </ListItem>
                        ))
                    }
                {execlusive}
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
        width: "100%",
        margin: 3,
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 10,
        // paddingTop
        // textAlign: "center",
        // marginLeft: "5%",
        // marginRight: "5%",
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