import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity,StatusBar } from 'react-native';
import LangBtn from './LangBtn';


export default function Login({ guestName, handleNameChange,handleisLogin, title, text, handleLngChange,engBtnText,canBtnText }) {

	return (
		<View style={[styles.container, styles.loginBG]}>
			<Text style={styles.loginTitle}>{title}</Text>
			<Text style={styles.loginText}>{text}</Text>
			<TextInput
				value={guestName}
				onChangeText={text => handleNameChange(text)}
				style={styles.input} />
			<TouchableOpacity style={styles.loginBtn} onPress={() => handleisLogin(true)} disabled={guestName ? false : true}>
				<Ionicons name="log-in" size={28} color="white" />
				<Text style={{ color: '#fff', fontWeight: '500' }}>{title}</Text>
			</TouchableOpacity>
			<LangBtn handleLngChange={handleLngChange} engBtnText={engBtnText} canBtnText={canBtnText}/>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginBG: {
		backgroundColor: 'rgba(0,0,0, 0.7)',
		// opacity: 0.7,
	},
	loginTitle: {
		fontSize: 25,
		fontWeight: '600',
		margin: 10,
		color: 'white',
	},
	loginText: {
		fontSize: 18,
		color: 'white',
		margin: 4,
	},
	loginBtn: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 18,
		marginTop: 20,
		marginBottom: 4,
		padding: 5,
		paddingRight: 10,
		backgroundColor: '#0040D6',
		borderRadius: 5,
		width: 100,
		height: 30,
	},
	input: {
		textAlign: 'center',
		color: 'white',
		borderWidth: 0.5,
		borderRadius: 4,
		width: 200,
		height: 30,
		borderColor: 'white',
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
		fontWeight: '500',
	},
});