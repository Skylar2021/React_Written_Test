import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import LangBtn from './LangBtn';

export default function Setting({ handleisLogin, logOutBtnText, handleLngChange, engBtnText, canBtnText }) {
	return (
		<View style={styles.container}>
			<TouchableHighlight underlayColor='#002782' style={styles.btnStyle} onPress={() => handleisLogin(false)}>
				<Text style={styles.btnText}>{logOutBtnText}</Text>
			</TouchableHighlight>
			<LangBtn
				handleLngChange={handleLngChange}
				engBtnText={engBtnText}
				canBtnText={canBtnText} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
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
})
