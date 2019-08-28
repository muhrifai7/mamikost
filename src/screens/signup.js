import React, { Component } from 'react'
import { Container,  Header, Left, Body, Right, Title } from 'native-base';
import { TextInput, StyleSheet, View, Button, Text, Image, TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import axios from 'axios';
import { AsyncStorage } from 'react-native';

import MakeButton from '../components/button'
import Profile from './profile'


export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
          email: '',
          telp:'',
        }
      }
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
    _aksiRegis = () => {
        this._aksiRegisAsync();
      }
      _aksiRegisAsync = async () => {
        try {
          //Fetch Data USERNAME dan PASSWORD API , LALU PENGECEKAN , JIKA MATCH BERI TOKEN
          let tempUser = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            telp: this.state.telp,
            job: this.state.job
          }
         
          await axios.post("http://192.168.0.27:5000/api/v1/user/register", tempUser)
            .then((response) => {
                console.log(response)
                if ( typeof response.data.status !== null ) {
                    alert(' Data Berhasil ditambahkan')
                    this.props.navigation.navigate('Login')
                }else {
                     alert(response.data.error)
                     this.props.navigation.navigate('Signup')
            
                }   
            })
            .catch((error) => {
              alert(error)
            });
        }
        catch (e) { }
      }    

    

    render() {
        return (
            <KeyboardAvoidingView
            style={{flex:1}}
            behavior="padding">
            
                <View style={{ justifyContent: 'center'}}>
                    <Image style={styles.imgResize} source={require('../assets/img/undraw_Hello_qnas.png')}/>
                </View>
                <View style={{ justifyContent: 'center'}}>
                    <TextInput style={styles.textInput} placeholder='username'
                        onChangeText={(username)=> this.setState({username})}
                    />
                    <TextInput style={styles.textInput} placeholder='password' 
                        onChangeText={(password)=> this.setState({password})}
                    />
                    <TextInput
                    style={styles.textInput} placeholder='email' 
                    onChangeText={(email)=> this.setState({email})}
                    />
                    <TextInput
                    style={styles.textInput} placeholder='telp' 
                    onChangeText={(telp)=> this.setState({telp})}
                    />
                </View>
                <View style={{ justifyContent: 'center'}}>
                <TouchableOpacity style={styles.button} onPress={() => this._aksiRegis()}>
                        <Text style={styles.text}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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