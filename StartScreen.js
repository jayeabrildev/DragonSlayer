import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default class StartScreen extends Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ImageBackground source = {require("./images/startbg.jpg")} style = {styles.backgroundImage}>
            <View style = {styles.container}>
            <View style = {styles.topSpace}/>
                <View style = {styles.logoSpace}>
                    <Image source = {require("./images/InstantPanaloLogo.gif")} style = {styles.logoImage} />
                </View>
                <View style = {styles.buttonSpace}>
                    <TouchableOpacity onPress = {() => navigation.navigate('HomeScreen') }>
                        <Image source = {require("./images/playbutton.png")} style = {styles.playImage}/>
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
    },
    topSpace: {
        flex: 0.2,
    },
    logoSpace: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: hp('3%'),
    },
    logoImage: {
        resizeMode: 'contain',
        height: hp('35%'),
        width: wp('100%'),
        alignSelf: 'center',
    },
    buttonSpace: {
        flex: 1.1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    playImage: {
        resizeMode: 'contain',
        height: hp('10%'),
        width: hp('30%'),
    },
})
