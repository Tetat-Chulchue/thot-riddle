import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo'

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Logo/>
                </View>
                <Text style={styles.title}>
                    Thoth's Riddle
                </Text>
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
    },
    title: {
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
    },
    logo: {
        flex: 0.5
    }
});

export default Welcome;