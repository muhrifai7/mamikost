import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, TextInput, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker'
import { SearchBar } from 'react-native-elements'
import { RadioButton } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'


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
            region: {
                latitude: -6.059989,
                longitude: 106.7063,
                latitudeDelta: 0.025,
                longitudeDelta: 0.025,
            },
            checked: 'first',
            search: '',
            photo: null,
            type: "",
            city: "",
            village: "",
            alamat: "",
            province: "",
            name: "",
            price: "",
            room: 3,
            latitude: "",
            longitude: "",
            photoURL: "",
            area: "",
            facility: "Wi-fi, AC",
            description: '',
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
    onRegionChange = (region) => {
        this.setState({ region });

      }

      simpanData = async () => {
        try {
          const userTokenTemp = await AsyncStorage.getItem('userToken');
          const userStrTemp = await AsyncStorage.getItem('userObj');
          const objUser = await JSON.parse(userStrTemp);
          let dataUser = {
            type: "putra",
            city: this.state.city,
            village: "",
            alamat: "Priok",
            province: this.state.province,
            name: this.state.name,
            cost: this.state.price,
            room: 3,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            photoURL: "",
            area: "5 x 5 m",
            facility: "Wi-fi, AC",
          }
          console.log(dataUser)

          const configBarier = {
            headers: { Authorization: "bearer " + userTokenTemp }
          };
          axios.post("https://mamiclone-api.herokuapp.com/api/v1/dorms", dataUser,configBarier)
          alert('Berhasil ditambahkan')
          this.props.navigation.navigate('ListDorm')
        } catch (e) {
          console.log(`ERROR  : ${e}`)
        }
      }
      _aksiTambah = () => {
        this.simpanData();
      }


    render() { 
        const { photo } = this.state
        const { checked } = this.state;

        return (
            <View>
                <ScrollView>
                    <View>
                        <View style={styles.field}>
                            <Text style={styles.text}>Nama Kost *</Text>
                            <TextInput placeholder='Masukan nama kost' underlineColorAndroid='#00b894' 
                               onChangeText={(name)=> this.setState({name})}
                            ></TextInput>
                            <Text style={styles.text}>Alamat Kost  *</Text>
                            <TextInput placeholder='Masukan Nama Provinsi' underlineColorAndroid='#00b894'
                                 onChangeText={(province)=> this.setState({province})}
                            >
                            </TextInput>

                            <Text style={styles.text}>Harga perbulan  *</Text>
                            <TextInput placeholder='Masukan Nama kota' underlineColorAndroid='#00b894'
                                 onChangeText={(price)=> this.setState({price})}
                            >
                            </TextInput>

                            <Text style={styles.text}>Nama Kota  *</Text>
                            <TextInput placeholder='Masukan Nama kota' underlineColorAndroid='#00b894'
                                 onChangeText={(city)=> this.setState({city})}
                            >
                            </TextInput>

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
                            

                            <View style={{
                            height: 250
                            }}>
                            <MapView style={{
                                width: '100%',
                                height: '100%'
                            }}
                                initialRegion={this.state.region}
                                onRegionChangeComplete={this.onRegionChange}>
                                <Marker
                                coordinate={this.state.region}
                                title={"Kosan"}
                                description={" - Marker kost - "}
                                />
                            </MapView>
                            </View>

                            <View style={{flexDirection:'row'}}>
                            <TextInput style={{flex:1}}
                             editable={false}
                            selectTextOnFocus={false}
                            value={this.state.region.latitude.toString()}
                            placeholder='Latitude' underlineColorAndroid='#00b894'
                            onChangeText={(lat)=> this.setState({latitude})}
                              >
                             </TextInput>
                            <TextInput style={{flex:1}} 
                            editable={false}
                            selectTextOnFocus={false}
                            value={this.state.region.longitude.toString()}
                            placeholder='longtitude' underlineColorAndroid='#00b894' 
                            onChangeText={(long)=> this.setState({longitude})}
                            ></TextInput>
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
                            <TextInput placeholder='Masukkan nama pemilik kost' underlineColorAndroid='#00b894' 
                            onChangeText={(name)=> this.setState({name})}
                            ></TextInput>
                            <Text style={styles.text}>Nomor telepon Pemilik Kost *</Text>
                            <TextInput placeholder='Masukkan nomor telepon pemilik kost' underlineColorAndroid='#00b894'
                            onChangeText={(nohp)=> this.setState({nohp})}
                             ></TextInput>
                            <Text style={styles.text}>Pengelola Kost</Text>
                            <TextInput placeholder='Masukkan nama pengelola kost' underlineColorAndroid='#00b894' 
                            onChangeText={(name)=> this.setState({name})}
                            ></TextInput>
                            <Text style={styles.text}>No. Telepon Pengelola Kost</Text>
                            <TextInput placeholder='Masukkan nomor telepon pengelola kost' underlineColorAndroid='#00b894' 
                            onChangeText={(name)=> this.setState({name})}
                            ></TextInput>

                        </View>

                    </View>
                        <Button onPress={this._aksiTambah}
                        title="Submit" style={{height:50,backgroundColor:'green'}}/>
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