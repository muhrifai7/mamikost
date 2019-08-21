import React, { Component } from 'react'
import { Container,  Header, Left, Body, Right, Title } from 'native-base';
import { TextInput, StyleSheet, View, Button, Text, Image, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import MakeButton from '../components/button'
import Profile from './profile'


export default class Signup extends Component {
    static navigationOptions = ({ navigation }) => (
        {
            headerStyle: {
                elevation: 0,
            },
            headerTitleStyle: {
                color: 'green'
            },
            title: 'Sign Up',
        }
    )

    render() {
        return (
            <View>
                <View style={{ justifyContent: 'center'}}>
                    <Image style={styles.imgResize} source={require('../assets/img/undraw_Hello_qnas.png')}/>
                </View>
                <View style={{ justifyContent: 'center'}}>
                    <TextInput style={styles.textInput} placeholder='Email address'/>
                    <TextInput style={styles.textInput} placeholder='Username' />
                    <TextInput secureTextEntry={true}
                    style={styles.textInput} placeholder='Password' />
                    <TextInput secureTextEntry={true}
                    style={styles.textInput} placeholder='Repeat Password' />
                </View>
                <View style={{ justifyContent: 'center'}}>
                <MakeButton title='Daftar' action={()=> {this.props.navigation.navigate('Profile')}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imgResize: {
        height: 175,
        width: 300,
        aspectRatio: 1.0,
        alignSelf: 'center',
        margin: 25
    },
    textInput: { 
        alignSelf: 'center', 
        borderWidth: 0.5, 
        borderRadius: 20, 
        width: 300, 
        paddingLeft: 20,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'green',
        padding: 20,
        paddingTop: 15,
        width: 300,
        borderRadius: 25,
        elevation: 7,
        height: 20,
    },
    text: {
        bottom: 10,
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    }
})