import React from 'react'
import {Pressable, Text, StyleSheet } from 'react-native'
import i18next from '../i18n.config';

export default function LangBtn({engBtnText, canBtnText,handleLngChange}) {
	let currentLang = i18next.language

    return (
        <>
        {(currentLang === 'en') ? 
        <Pressable style={styles.btnStyle} title={canBtnText} onPress={() => handleLngChange('can')} >
            <Text style={styles.btnText}>{canBtnText}</Text>
            </Pressable>
        : 
        <Pressable style={styles.btnStyle} title={engBtnText} onPress={() => handleLngChange('en')} >
            <Text style={styles.btnText}>{engBtnText}</Text>
            </Pressable>
        }
        </>
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
})