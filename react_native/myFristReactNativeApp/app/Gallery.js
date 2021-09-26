import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

export default function Gallery() {
	return (
		<ScrollView>
			<View style={styles.imageContain}></View>
			<View style={styles.imageContain}></View>
			<View style={styles.imageContain}></View>
			<View style={styles.imageContain}></View>
			<View style={styles.imageContain}></View>
		</ScrollView>
		
	)
}

const styles = StyleSheet.create({
	imageContain:{
		width: 100,
		height:100,
		backgroundColor: '#123456',
		padding:10,
	}
})
