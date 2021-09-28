import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const About = ({ titleText, selfIntro }) => {
	return (
		<View style={styles.aboutContainer}>
			<Text style={styles.aboutTitle}>
				{titleText} <Ionicons name="md-happy-outline" size={24} color="black" />
			</Text>
			<Text style={styles.aboutText}>{selfIntro}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	aboutContainer: {
		padding: 15,
	},
	aboutTitle: {
		fontSize: 22,
		fontWeight: '600',
		margin: 10,
		color: 'black',
	},
	aboutText: {
		fontSize: 17,
		lineHeight: 25,
		backgroundColor: '#FFFFFF',
		padding: 20,
		margin: 5,
		borderRadius: 10,
		textAlign: 'justify',
	},
})

export default About
