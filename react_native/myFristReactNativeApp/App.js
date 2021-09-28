import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, SafeAreaView, Platform, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import * as Linking from 'expo-linking';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

// import Gallery from './app/Gallery'
import About from './app/About'
import Login from './app/Login'
import LangBtn from './app/LangBtn'
import i18next from './i18n.config';
import Setting from './app/Setting';
import Welcome from './app/Welcome';

export default function App() {
	const Tab = createBottomTabNavigator();
	const { t, i18n } = useTranslation();

	const [isAble, setIsAble] = useState(false);
	const handleIsAble = (status) => {
		return setIsAble(status)
	}


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

	let currentLang = i18next.language

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
								<Setting 
									logOutBtnText={t('settingPage.logoutBtn')}
									engBtnText={t('engButton')}
									canBtnText={t('canButton')}
									handleLngChange={handleLngChange}
									handleisLogin={handleisLogin}
									/>
							}
					</Tab.Screen>
				</Tab.Navigator>
			</NavigationContainer>
		)
	}

	return (
		<SafeAreaView style={styles.mainContainer}>
			{isLogin ? isAble ? 
			<MainContent /> : 
			<Welcome 
				handleIsAble={handleIsAble}
				guestName={guestName}
				text={t('welcomePage.selfIntro', { guestName })}
				homeBtnText={t('welcomePage.next')}
				/> :
					<Login 
						guestName={guestName} 
						handleNameChange={handleNameChange} 
						handleLngChange={handleLngChange}
						handleisLogin={handleisLogin}
						title={t('loginPage.loginTitle')}
						text={t('loginPage.text')}
						engBtnText={t('engButton')}
						canBtnText={t('canButton')}
						/>
			}
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
