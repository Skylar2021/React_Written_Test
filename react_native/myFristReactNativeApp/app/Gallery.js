import React from 'react'
import { Image, ScrollView, StyleSheet } from 'react-native'

export default function Gallery() {
	return (
		<ScrollView>
			<Image style={styles.image} source={require('../assets/sunflower.jpg')} fadeDuration={1000} />
			<Image style={styles.image} source={require('../assets/lightbulb.jpg')} fadeDuration={1000} />
			<Image style={styles.image} source={require('../assets/tm_bridge.jpg')} fadeDuration={1000} />
			<Image style={styles.image} source={require('../assets/sunset_back.jpg')} fadeDuration={1000} />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	image:{
		width: '95vw',
		minHeight:'40vh',
		flex:1,
		backgroundColor: '#123456',
		margin: 'auto',
		marginTop:3,
		borderRadius:4,
	}
})
