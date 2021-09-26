// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, SafeAreaView, Platform, StatusBar, ImageBackground } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from './app/WelcomeScreen'
import Gallery from './app/Gallery'
// import Login from './app/Login'
import i18next from './i18n.config';

export default function App() {
	const Tab = createBottomTabNavigator();

	const { t, i18n } = useTranslation();

	const handleLngChange = (code) => {
		i18n.changeLanguage(code)
	}

	const [guestName, setGuestName] = useState('');
	const handleNameChange = (text) => {
		return setGuestName(text)
	}

	const [isLogin, setisLogin] = useState(false)
	const handleisLogin = (status) => {
		if (status) {
			return setisLogin(status)
		} else {
			setGuestName('')
			return setisLogin(status)

		}
	}
	const changeName = (text) => {
		console.log(text)
		handleNameChange(text)
	}

	// const Login = () => {
	// 	return (
	// 		<View style={styles.container}>
	// 			<Text>{t('loginPage.loginTitle')}</Text>
	// 			<Text>{t('loginPage.text')}</Text>
	// 			<TextInput
	// 				value={guestName.name}
	// 				onChangeText={text => setGuestName(text)}
	// 				style={styles.input} />
	// 			<Button
	// 				style={styles.btn}
	// 				title={t('loginPage.loginTitle')}
	// 				onPress={() => alert('click')}
	// 				disabled={guestName.name ? false : true} />
	// 		</View>
	// 	)
	// }
	// const Login = () => {
	// 	return (
	// 		<View style={styles.container}>
	// 			{/* <Text>{t('loginPage.loginTitle')}</Text> */}
	// 			<Text>{t('loginPage.text')}</Text>
	// 			<TextInput
	// 				value={guestName}
	// 				onChangeText={text => handleNameChange(text)}
	// 				style={styles.input} />
	// 			<Button
	// 				style={styles.btn}
	// 				title={t('loginPage.loginTitle')}
	// 				onPress={() => alert('click')}
	// 				disabled={guestName ? false : true} />
	// 		</View>
	// 	)
	// }


	let icon = require('./assets/icon.png')

	return (
		<NavigationContainer >
			<SafeAreaView style={styles.container}>
				<Tab.Navigator>

					{isLogin ?
						<>
							<Tab.Screen name="Home" >
								{props => <WelcomeScreen {...props} guestName={guestName} />}
							</Tab.Screen>
							<Tab.Screen name="Gallery" >
								{props => <Gallery {...props} />}
							</Tab.Screen>
							<Tab.Screen name="Log Out" >
								{props =>
									<View>
										<Text>Are you sure to log out?</Text>
										<Button title="Confirm" onPress={() => handleisLogin(false)} />
									</View>}
							</Tab.Screen>
						</> : <>
							<Tab.Screen name={t('loginPage.loginTitle')}>
								{props =>
									<View style={styles.container}>
										<Text>{t('loginPage.loginTitle')}</Text>
										<Text>{t('loginPage.text')}</Text>
										<TextInput
											value={guestName}
											onChangeText={text => setGuestName(text)}
											style={styles.input} />
										<Button
											style={styles.btn}
											title={t('loginPage.loginTitle')}
											onPress={() => handleisLogin(true)}
											disabled={guestName ? false : true} />
									</View>}
							</Tab.Screen>
						</>}
				</Tab.Navigator>
				<Button style={styles.btn} title={t('engButton')} onPress={() => handleLngChange('en')} />
				<Button style={styles.btn} title={t('canButton')} onPress={() => handleLngChange('can')} />
				{/* <StatusBar style="auto" /> */}
				{/* <Image style={styles.image} source={icon} blurRadius={3} fadeDuration={1000} /> */}
				{/* <ImageBackground source={require('./assets/sea.jpg')} resizeMode="cover" style={styles.bgimage}> */}
				{/* </ImageBackground> */}
			</SafeAreaView>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	image: {
		width: 100,
		height: 100,
		margin: 10,
	},
	input: {
		borderWidth: 0.5,
		borderRadius: 4,
		width: 200,
	},
	bgimage: {
		flex: 1,
		justifyContent: "center",
	},
	btn: {
		borderWidth: 1,
		width: 100,
		height: 100,
	}
});
