import React, { Component } from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.propstitleText,
            text: this.props.selfIntro
        }
    }
    render() {
        return (
            
                <View style={styles.aboutContainer}>
					<Text style={styles.aboutTitle}>{this.state.title}</Text>
					<Text style={styles.aboutText}>{this.state.text}</Text>
				</View>
           
        )
    }
}

const styles = StyleSheet.create({
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
		height: '70vh',
	},
})
