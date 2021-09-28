import React from 'react'
import { StyleSheet, ImageBackground, Text, Pressable } from 'react-native'

const Welcome = ({ handleIsAble, text, homeBtnText }) => {
    return (
        <ImageBackground source={require('../assets/sea.jpg')} resizeMode="cover" style={styles.bgimage}>
            <Text style={styles.welcomeText}>
                {text}
            </Text>
            <Pressable style={styles.btnStyle} onPress={() => handleIsAble(true)}>
                <Text style={styles.btnText}>{homeBtnText}</Text>
            </Pressable>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: '#0040D6',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 3,
        height: 30,
        width: 100,
        margin: 3,
    },
    btnText: {
        color: '#fff',
        fontWeight: '500',
    },
    bgimage: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#FFFFFF',
        padding: 5,
        borderRadius: 10,
    },
})
export default Welcome