import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const About = ({ titleText, selfIntro }) => {
	return (
		<View style={styles.aboutContainer}>
			<Text style={styles.aboutTitle}>{titleText}</Text>
			<Text style={styles.aboutText}>{selfIntro}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	aboutContainer: {
		padding: 15,
	},
	aboutTitle: {
		fontSize: 25,
		fontWeight: '600',
		margin: 10,
		color: 'black',
	},
	aboutText: {
		backgroundColor: '#FFFFFF',
		padding: 20,
		margin: 5,
		borderRadius: 10,
		height: '100%',
		textAlign:'justify',
	},
})

export default About
