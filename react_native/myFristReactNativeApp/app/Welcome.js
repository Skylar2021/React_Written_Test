import React from 'react'
import { StyleSheet, ImageBackground, Text, TouchableHighlight, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Welcome = ({ handleIsAble, title, text, homeBtnText }) => {
    return (
        <ImageBackground imageStyle={{opacity:0.7}} source={require('../assets/sea.jpg')} resizeMode="cover" style={styles.bgimage}>
            <View style={styles.textArea}>
                <Text style={styles.welcomeTitle}>
                    {title}
                </Text>
                <Text style={styles.welcomeText}>
                    {text}<Ionicons name="md-happy-outline" size={24} color="#0040DF" />
                </Text>
            </View>
            <TouchableHighlight underlayColor='#002782' style={styles.btnStyle} onPress={() => handleIsAble(true)}>
                <Text style={styles.btnText}>{homeBtnText}</Text>
            </TouchableHighlight>
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
        fontWeight: '600',
		fontSize:16,
    },
    bgimage: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 20,
    },
    textArea: {
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        borderRadius: 10,
        padding: 15,
    },
    welcomeTitle: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 17,
        padding: 5,
    },
})
export default Welcome