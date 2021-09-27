import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, SafeAreaView, Platform, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import Gallery from './app/Gallery'
import About from './app/About'
import i18next from './i18n.config';

export default function App() {
	const Tab = createBottomTabNavigator();
	const { t, i18n } = useTranslation();
	const [isAble, setIsAble] = useState(false);

	const handleLngChange = (code) => {
		i18n.changeLanguage(code)
	}

	const [guestName, setGuestName] = useState('');
	const handleNameChange = (text) => {
		return setGuestName(text)
	}

	const [isLogin, setisLogin] = useState(true)
	const handleisLogin = (status) => {
		if (status) {
			return setisLogin(status)
		} else {
			setGuestName('')
			return setisLogin(status)
		}
	}

	const LangBtn = () => {
		let currentLang = i18next.language
		if (currentLang === 'en') {
			return <Pressable style={styles.btnStyle} title={t('canButton')} onPress={() => handleLngChange('can')} ><Text style={styles.btnText}>{t('canButton')}</Text></Pressable>
		} else {
			return <Pressable style={styles.btnStyle} title={t('engButton')} onPress={() => handleLngChange('en')} ><Text style={styles.btnText}>{t('engButton')}</Text></Pressable>
		}
	}

	// const About = ({titleText, selfIntro}) =>{
	// 	return (
	// 		<>
	// 			<View style={styles.aboutContainer}>
	// 				<Text style={styles.aboutTitle}>{titleText}</Text>
	// 				<Text style={styles.aboutText}>{selfIntro}</Text>
	// 			</View>
	// 		</>
	// 	)
	// }

	const MainContent = () => {
		return (
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => (
						{
							tabBarIcon: ({ focused, color, size }) => {
								if (route.name === 'About' || route.name === '關於') {
									return (
										<Ionicons
											name={focused ? 'person' : 'person-outline'}
											size={size}
											color={color}
										/>
									);
								} else if (route.name === 'Setting' || route.name === '設定') {
									return (
										<Ionicons
											name={focused ? 'settings' : 'settings-outline'}
											size={size}
											color={color}
										/>)
								}
							},
							tabBarActiveTintColor: '#0040D6',
							tabBarInactiveTintColor: 'black',
						})}>
					
					<Tab.Screen name={t('tab.about')} >
						{props =>
							<About {...props} titleText={t('aboutmePage.title')} selfIntro={t('aboutmePage.text')}/>}
					</Tab.Screen>
					<Tab.Screen name={t('tab.setting')} >
						{props =>
							<View style={styles.container}>
								<Pressable style={styles.btnStyle} onPress={() => handleisLogin(false)}>
									<Text style={styles.btnText}>{t('settingPage.logoutBtn')}</Text>
								</Pressable>
								{LangBtn()}
							</View>}
					</Tab.Screen>
				</Tab.Navigator>
			</NavigationContainer>
		)
	}

	const WelcomePage = () => {
		return (
			<ImageBackground source={require('./assets/sea.jpg')} resizeMode="cover" style={styles.bgimage}>
				<Text style={styles.welcomeText}>
					{t('welcomePage.selfIntro', { guestName })}
				</Text>
				<Pressable style={styles.btnStyle} onPress={() => setIsAble(true)}>
					<Text style={styles.btnText}>{t('welcomePage.next')}</Text>
				</Pressable>
			</ImageBackground>
		)
	}

	return (
		<SafeAreaView style={styles.mainContainer}>
			{isLogin ? isAble ? <MainContent /> : <WelcomePage />
				:
				<View style={[styles.container, styles.loginBG]}>
					<Text style={styles.loginTitle}>{t('loginPage.loginTitle')}</Text>
					<Text style={styles.loginText}>{t('loginPage.text')}</Text>
					<TextInput
						value={guestName}
						onChangeText={text => handleNameChange(text)}
						style={styles.input} />
					<TouchableOpacity style={styles.loginBtn} onPress={() => handleisLogin(true)} disabled={guestName ? false : true}>
						<Ionicons name="log-in" size={28} color="white" />
						<Text style={{ color: '#fff', fontWeight: '500' }}>{t('loginPage.loginTitle')}</Text>
					</TouchableOpacity>
					{!isLogin && LangBtn()}
				</View>}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginBG: {
		backgroundColor: 'black',
		opacity: 0.7,
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
	bgimage: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: 10,
	},
	welcomeText: {
		textAlign: 'center',
		fontSize: 18,
		backgroundColor: '#FFFFFF',
		padding: 5,
		borderRadius: 10,
	},
	aboutContainer:{
		padding: 15,
	},
	aboutTitle:{
		fontSize: 25,
		fontWeight: '600',
		margin: 10,
		color: 'black',
	},
	aboutText:{
		fontSize: 18,
		backgroundColor: '#FFFFFF',
		padding: 5,
		borderRadius: 10,
	},
	galleryBottom: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 'max-content',
	},
	galleryText: {
		fontSize: 12,
	},
	settingContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	}
});
