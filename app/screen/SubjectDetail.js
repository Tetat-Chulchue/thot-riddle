import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    Platform,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
} from "react-native";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import color from '../constants/colors';
const { width, height } = Dimensions.get('window');
import { AntDesign } from '@expo/vector-icons';

const SubjectDetail = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.subHeader}>
                    <AntDesign name="left" size={24} color="black"/>
                    <TouchableOpacity style={styles.bttn} >
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>Create Subject</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.search}>
                    <TextInput
                        placeholder='Search'
                        textContentType='search'
                        style={styles.form}
                    />
                    <AntDesign name="search1" size={24} color="black" style={{flex: 1}}/>
                </View>
                <View style={{ alignItems: 'stretch', }}>
                    <TouchableOpacity style={styles.bttn2} >
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' , alignSelf: "center"}}>Subject 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} >
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' , alignSelf: "center"}}>Subject 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} >
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' , alignSelf: "center"}}>Subject 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} >
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Subject 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} >
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Subject 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} >
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Subject 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bttn2} >
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: "center" }}>Subject 1</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

// SubjectDetail.navigationOptions = (navigationData) => {
//     // return {
//     //     headerTitle: "Subject",
//     //     headerLeft: () => {
//     //       return (
//     //         // <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//     //         //   <Item
//     //         //     title="Menu"
//     //         //     iconName="ios-menu"
//     //         //     onPress={() => {
//     //         //       navigationData.navigation.pop();
//     //         //     }}
//     //         //   />
//     //         // </HeaderButtons>
//     //         <Button
//     //           onPress={() => alert('This is a button!')}
//     //           title="Info"
//     //           color="black"
//     //         />
//     //       );
//     //     },
//     //   };
// };

const styles = StyleSheet.create({
    bttn2: {
        backgroundColor: "lightgrey",
        borderColor: "white",
        borderWidth: "2px",
        padding: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        margin: "3px",
        alignItems: 'stretch',
        marginLeft: "5%",
        marginRight: "5%",
    },
    search: {
        flexDirection: "row",
        alignItems: 'center',
        // width: "100%",
        marginBottom: "7%",
        flex: 1,
        marginLeft: "5%",
        marginRight: "5%",
    },
    subHeader: {
        flexDirection: "row",
        // alignItems: 'Left',
        // width: "100%",
        marginBottom: "10%",
        // alignItems: 'stretch',
    },
    back: {
        width: "30px",
        height: "30px",
        resizeMode: "contain",
        marginRight: "30px",
        alignSelf: "flex-start",
        flex: 1,
    },
    bttn: {
        backgroundColor: "lightgrey",
        borderColor: "white",
        borderWidth: "2px",
        padding: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        alignItems: 'center',
        alignSelf: "flex-end",
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: color.color_5,
        // alignItems: 'center',
        paddingTop: 20,
        flexDirection: 'collumn',
        // alignItems: 'stretch',
        padding: 10,
    },
    subContainer: {
        padding: 10,
        backgroundColor: color.color_4,
        borderRadius: 10,
        // alignItems: 'center'
    },
    form: {
        borderBottomColor: '#000',
        padding: "5px",
        flex: 9,
        // textDecorationLine: "underline",
    },
    header: {
        fontSize: 20,
        // fontWeight: 'bold',
        alignItems: 'left',
        flex: 1,
        margin: "2px",
    },
    userProfilePic: {
        resizeMode: 'contain',
        width: width * 0.4,
        height: height * 0.4,
    }
});

export default SubjectDetail;
