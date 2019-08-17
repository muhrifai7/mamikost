import React, { Component } from 'react'
import { FlatList, StyleSheet, ScrollView, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid"
import { SearchBar } from 'react-native-elements'
import { withNavigation, createMaterialTopTabNavigator } from 'react-navigation'


const ads = [
    {
        name: 'Kost Priya Bahagia',
        address: 'Jl. Ahmad Fuadi No. 25',
        image: 'https://www.finansialku.com/wp-content/uploads/2018/02/Ketahui-Manajemen-Rumah-Kost-Dengan-Baik-dan-Benar-01-Finansialku.jpg'
    },
    {
        name: 'Kost Mahal Sekali',
        address: 'Jl. Rupiah Ceria No.1',
        image: 'https://www.lamudi.co.id/static/cms/content-section/17-CW27-9_pic1.jpg'
    },
    {
        name: 'Kost Abadi',
        address: 'Jl. Cendrawasih Setia No.5',
        image: 'https://assets-a2.kompasiana.com/items/album/2016/04/11/rumah-kost-570ba81a2e7a613219366dcd.jpg?t=o&v=350'
    }
]

export default class ListAds extends Component {
    static navigationOptions = ({ navigation }) => (
        {
            title: 'Daftar Iklan',
            headerStyle: {
                elevation: 0
            },
            headerTitleStyle: {
                color: 'green'
            }
        }
    )

    render () {
        return (
            <View>
                <FlatList 
                    data={ads}
                    renderItem={({ item }) => (
                        <View style={{ width: 400, padding: 100, margin: 10, borderRadius: 30, backgroundColor: 'green'}}>
                            <Text>
                                {item.name}
                            </Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}