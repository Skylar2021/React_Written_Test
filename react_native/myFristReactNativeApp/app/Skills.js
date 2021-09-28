import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';



export default function Skill() {
    return (
        <View styles={styles.skillContainer}>
            <View style={styles.skillList}>
                <View style={styles.skill}>
                    <Ionicons style={styles.skillIcon} name="logo-html5" size={60} color="#e34c26" />
                    <Text style={styles.skillText}>HTML</Text>
                </View>
                <View style={styles.skill}>
                    <Ionicons style={styles.skillIcon} name="logo-css3" size={60} color="#264de4" />
                    <Text style={styles.skillText}>CSS</Text>
                </View>
            </View>
            <View style={styles.skillList}>
                <View style={styles.skill}>
                    <Ionicons style={styles.skillIcon} name="logo-javascript" size={60} color="#f0db4f" />
                    <Text style={styles.skillText}>JavaScript</Text>
                </View>
                <View style={styles.skill}>
                    <FontAwesome5 style={styles.skillIcon} name="bootstrap" size={60} color="#7952b3" />
                    <Text style={styles.skillText}>Bootstrap</Text>
                </View>
            </View>
            <View style={styles.skillList}>
                <View style={styles.skill}>
                    <Ionicons style={styles.skillIcon} name="logo-react" size={60} color="rgb(97, 219, 251)" />
                    <Text style={styles.skillText}>React</Text>
                </View>
                <View style={styles.skill}>
                    <Ionicons style={[styles.skillIcon, styles.reactNative]} name="logo-react" size={60} color="rgb(97, 219, 251)" />
                    <Text style={styles.skillText}>React Native</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    skillContainer: {
        padding: 10,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    skillList: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
    },
    skill: {
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 5,
        width: 110,
        height: 110,
    },
    skillIcon: {
        padding: 2,


    }, skillText: {

    },
    reactNative: {
        backgroundColor: 'rgb(28, 30, 33)',
        borderRadius: 10,

    }

})
