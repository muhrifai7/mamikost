import React, { Component } from 'react'
import { Container,  Header, Left, Body, Right, Title } from 'native-base';
import { TextInput, StyleSheet, View, Button, Text, Image, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import Signup from './signup'
import Profile from './profile'
import ListAds from './listAds'
import FormAds from './formAds'
import Booklist from './booklist'


class Login extends Component {
    static navigationOptions = ({ navigation }) => (
        {
            title: 'Login',
            headerTitleStyle: {
                color: 'green'
            },
            headerStyle: {
                elevation: 0
            }
        }
    )

    render() {
        return (
            <View>
                <View style={{ justifyContent: 'center'}}>
                    <Image style={styles.imgResize} source={require('../assets/img/undraw_synchronize_ccxk.png')}/>
                </View>
                <View style={{ justifyContent: 'center'}}>
                    <TextInput style={styles.textInput} placeholder='Username'/>
                    <TextInput style={styles.textInput} placeholder='Password' />
                </View>
                <View style={{ justifyContent: 'center'}}>
                    <TouchableOpacity style={styles.buttonLogin} onPress={() => this.props.navigation.navigate('Profile')}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRegister} onPress={() => this.props.navigation.navigate('Signup')}>
                        <Text style={styles.text}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const RegistrationNavigator = createStackNavigator(
    {
        Login: Login,
        Signup: Signup,
        Profile: Profile,
        ListAds: ListAds,
        FormAds: FormAds,
        Booklist: Booklist
    },
    {
        initialRouteName: 'Login',
        headerMode: 'float'
    }

)

export default RegistrationNavigator

RegistrationNavigator.navigationOptions = ({navigation}) => {
    let { routeName } = navigation.state.routes[navigation.state.index]
        let navigationOptions = {}
        if ( routeName === 'Profile' || routeName === 'Booklist' || routeName === 'Signup' || routeName === 'ListAds' || routeName === 'FormAds') {
            navigationOptions.tabBarVisible = false
        }
        return navigationOptions
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
    buttonLogin: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'green',
        height: 20,
        padding: 20,
        paddingTop: 15,
        width: 300,
        borderRadius: 20,
        elevation: 7,
        marginTop: 10
    },
    buttonRegister: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'gray',
        height: 20,
        padding: 20,
        paddingTop: 15,
        width: 300,
        borderRadius: 25,
        elevation: 7,
        marginTop: 10
    },
    text:{
        bottom: 10,
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    }
})