import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import Login from './app/Login'
import Welcome from './app/Welcome';
import About from './app/About'
import Skills from './app/Skills';
import Setting from './app/Setting';

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
											size={20}
											color={color}
										/>
									);
								} else if (route.name === 'Skills' || route.name === '技能') {
									return (
										<Ionicons
											name={focused ? 'code-working' : 'code-working-outline'}
											size={20}
											color={color}
										/>)
								} else if (route.name === 'Setting' || route.name === '設定') {
									return (
										<Ionicons
											name={focused ? 'settings' : 'settings-outline'}
											size={20}
											color={color}
										/>)
								}
							},
							tabBarActiveTintColor: '#0040D6',
							tabBarInactiveTintColor: 'black',
							tabBarStyle: {
								height:48,
								backgroundColor: 'lightgray',
							},
							headerTitleStyle: {
								fontWeight: 'bold',
								fontSize:28,
								textAlign:'center',
							  },
							  headerTintColor: '#fff',
							  headerStyle: {
								backgroundColor: '#0040D6',
								height:48,
							  },
							  tabBarLabelStyle:{
								  fontSize:15
							  }
						})}>
					<Tab.Screen name={t('tab.about')} >
						{props =>
							<About {...props} titleText={t('aboutmePage.title')} selfIntro={t('aboutmePage.text')} />}
					</Tab.Screen>
					<Tab.Screen name={t('tab.skill')} >
						{props =>
							<Skills {...props} title={t('skillPage.title')} />}
					</Tab.Screen>
					<Tab.Screen name={t('tab.setting')} >
						{props =>
							<Setting
								{...props}
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
					title={t('welcomePage.welcome')}
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
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
