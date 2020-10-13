import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/img/logo_thoth.png')}
                    style={styles.logo}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: height * 0.67
    },
    logo: {
        flex: 2,
        width: width * 0.9,
        resizeMode: 'contain',
    },
});


export default Logo;