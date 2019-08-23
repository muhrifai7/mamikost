import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, TextInput, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker'
import { SearchBar } from 'react-native-elements'
import Maps from '../components/Maps'

export default class FormAds extends Component {

    static navigationOptions = ({ navigation }) => (
        {
            headerStyle: {
                elevation: 0
            },
            title: 'Pasang Iklan',
            headerTitleStyle: {
                color: 'green'
            }
        }
        
    )

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            photo: null
        }
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true
        }

    ImagePicker.launchImageLibrary(options, response => {
        if (response.uri) {
            this.setState(
                {
                    photo: response
                }
            )
        }
    })
}

    handleSearch = (search) => {
        this.setState({search})
    }
    _formAds = ()=> {
        alert('ok')
    }


    render() {
        const { photo } = this.state

        return (
            <View>
                <ScrollView>
                    <View>
                        <View style={styles.field}>
                            <Text style={styles.text}>Nama Kost *</Text>
                            <TextInput placeholder='Masukan nama kost' underlineColorAndroid='#00b894' ></TextInput>
                            <Text style={styles.text}>Alamat Kost  *</Text>
                            <TextInput placeholder='Masukan alamat kost' underlineColorAndroid='#00b894' ></TextInput>
                            <Text style={styles.text}>Search Alamat *</Text>
                            <SearchBar
                                lightTheme={true}
                                containerStyle={styles.searchBar}
                                inputContainerStyle={styles.input}
                                style={{ borderRadius: 20, width: 300, backgroundColor: 'white', height: 20}}
                                placeholder="Type Here..."
                                onChangeText={this.handleSearch}
                                value={this.state.search}
                            />  
                            
                            <View style={styles.map}>
                                <Maps />
                            </View>

                            <Text style={styles.text}>Foto Iklan *</Text>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                {photo && (
                                    <Image
                                        source={{ uri: photo.uri }}
                                        style={{ width: 300, height: 300 }}
                                    />
                                )}
                                <TouchableOpacity onPress={this.handleChoosePhoto} style={{backgroundColor:'green',
                                                                                            width: 100,
                                                                                            height: 20,
                                                                                            borderRadius: 20,
                                                                                            borderWidth: 0,
                                                                                            alignItems: 'center'}}>
                                    <Text style={{color: 'white'}}>Upload Photo</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.text}>Pemilik Kost *</Text>
                            <TextInput placeholder='Masukkan nama pemilik kost' underlineColorAndroid='#00b894' ></TextInput>
                            <Text style={styles.text}>Nomor telepon Pemilik Kost *</Text>
                            <TextInput placeholder='Masukkan nomor telepon pemilik kost' underlineColorAndroid='#00b894' ></TextInput>
                            <Text style={styles.text}>Pengelola Kost</Text>
                            <TextInput placeholder='Masukkan nama pengelola kost' underlineColorAndroid='#00b894' ></TextInput>
                            <Text style={styles.text}>No. Telepon Pengelola Kost</Text>
                            <TextInput placeholder='Masukkan nomor telepon pengelola kost' underlineColorAndroid='#00b894' ></TextInput>

                        </View>

                    </View>
                        <Button onPress={()=> {this._formAds()}}
                        title="Submit" style={{height:50}}/>
                </ScrollView>
               
            </View>

        )
    }
    backToProfile = () => {
        this.props.navigation.navigate('Profile');
    }

    callCenter = () => {
        this.props.navigation.navigate('CallCenter');
    }
}

const styles = StyleSheet.create({
    map: {
        backgroundColor: '#dfe6e9',
        padding: 20,
        height: 95,
        borderRadius: 4,
        borderWidth: 0,
        borderColor: 'black',
        marginRight: 10,
        height: 200,
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        paddingLeft: 8,
        color: 'black'
    },
    field: {
        marginLeft: 8,
        marginTop: 10,
        marginBottom: 50,
        marginRight: 8
    },
    searchBar: {
        backgroundColor:'white',
        width: 350,
        height: 40,
        borderRadius: 5,
        borderWidth: 0,
        marginVertical: 15,
        marginHorizontal: 15,
        elevation: 4,
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 5,
        width: 350,
        height: 40,
        bottom: 9.5,
        right: 4
    },
})