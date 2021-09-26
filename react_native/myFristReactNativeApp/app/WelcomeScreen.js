import { Text, View } from 'react-native'
import React from 'react';


export default function WelcomeScreen({guestName}) {
    return (
        <View>
            <Text>
                Hello {guestName}~ Welcome to My First App
            </Text>
        </View>
    )
}
