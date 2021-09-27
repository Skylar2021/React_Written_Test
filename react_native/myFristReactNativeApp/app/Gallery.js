import React from 'react'
import { Image, ScrollView, StyleSheet } from 'react-native'

export default function Gallery() {
	return (
		<ScrollView>
			<Image style={styles.image} source={require('../assets/sunflower.jpg')} fadeDuration={1000} />
			<Image style={styles.image} source={require('../assets/lightbulb.jpg')} fadeDuration={1000} />
			<Image style={styles.image} source={require('../assets/tm_bridge.jpg')} fadeDuration={1000} />
			<Image style={styles.image} source={require('../assets/sunset_back.jpg')} fadeDuration={1000} />

			
				{/* <>
				<Gallery {...props} />
				<TouchableOpacity style={styles.galleryBottom} onPress={() => { Linking.openURL('https://instagram.com/sw_share?utm_medium=copy_link') }}>
					<Text style={styles.galleryText}>{t('galleryPage.text')}</Text>
					<Ionicons name="logo-instagram" size={20} color="#8a3ab9" />
				</TouchableOpacity>
			</> */}
			
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
