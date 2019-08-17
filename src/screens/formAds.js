import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

export default class FormAds extends Component {
    static navigationOptions = ({navigation}) => (
        {
            title: 'Form Pasang Iklan',
            headerTitleStyle: {
                color: 'green'
            }
        }
    )

    render() {
        return (
            <View>
                <Text>Ini Form untuk pasang iklan</Text>
            </View>
        )
    }
}