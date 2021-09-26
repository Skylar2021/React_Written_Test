import React from 'react';
import { View,Text, TextInput, Button, StyleSheet,Platform } from 'react-native';
// import { useTranslation } from 'react-i18next';
const { t } = useTranslation()

export default function Login({guestName, handleNameChange}) {
    const changeName = (text) =>{
        handleNameChange(text)
    }
    return (
        <View style={styles.container}>
            <Text>{t('loginPage.loginTitle')}</Text>
            <Text>{t('loginPage.text')}</Text>
            <TextInput
                value={guestName}
                onChangeText={text => changeName(text)}
                style={styles.input} />
            <Button
                style={styles.btn}
                title={t('loginPage.loginTitle')}
                onPress={() => alert('click')}
                disabled={guestName ? false : true} />
        </View>
    )
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