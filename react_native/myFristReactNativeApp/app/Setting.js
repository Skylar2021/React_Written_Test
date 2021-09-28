import React from 'react';
import {StyleSheet,View,Pressable,Text} from 'react-native';
import LangBtn from './LangBtn';

export default function Setting({ handleisLogin,logOutBtnText,handleLngChange,engBtnText,canBtnText }) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.btnStyle} onPress={() => handleisLogin(false)}>
                <Text style={styles.btnText}>{logOutBtnText}</Text>
            </Pressable>
            <LangBtn 
                handleLngChange={handleLngChange} 
                engBtnText={engBtnText} 
                canBtnText={canBtnText}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
        backgroundColor: 'white',
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
    
})
