import React, { Component } from 'react'
import { Button, StyleSheet, ScrollView, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import { createStackNavigator } from 'react-navigation'


import ListView from './listView'
import Promo from '../components/promo'
import Place from '../components/place'

class Explore extends Component {
    
    static navigationOptions= ({ navigation }) => (
        {
            headerStyle: {
            elevation: 0,
            },
            headerLeft: (
                <TouchableHighlight>
                    <Icon name="barcode" size={28} style={styles.iconGreen}/>
                </TouchableHighlight>
            ),
            title: 'mamikos.com',
            headerTitleStyle: {
                color: 'green'
            },
            headerRight: (
                <TouchableHighlight onPress={() => (navigation.navigate('ListView'))}>
                    <Icon name='search' size={28} style={{color: 'green', marginRight: 14}}/>
                </TouchableHighlight>
            )
        } 
        
        )
    
    render() {
        return (
            <View style={{backgroundColor: '#white'}}>
                <View style={styles.servicesWrapper}>
                    <TouchableOpacity style={styles.services}>
                        <Icon name='bed' style={styles.iconGreen}/>
                        <Text style={styles.iconGreen}>Kostan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.services}>
                        <Icon name='business' style={styles.iconGreen}/>
                        <Text style={styles.iconGreen}>Hotel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.services}>
                        <Icon name='basket' style={styles.iconGreen}/>
                        <Text style={styles.iconGreen}>Toko</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.services}>
                        <Icon name='briefcase' style={styles.iconGreen}/>
                        <Text style={styles.iconGreen}>Kerja</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={false}>
                    <Promo />
                    <Place />
                </ScrollView>
            </View>
        )
    }
}



const ExploreNavigator = createStackNavigator(
        {
            Explore: Explore,
            ListView: ListView,
        },
        {
            initialRouteName: 'Explore',
            headerMode: 'screen'
        }
    
)

export default ExploreNavigator


const styles = StyleSheet.create({
    iconGreen: {
        color: 'green',
        marginLeft: 20,
    },
    services: {
        flex: 1, 
        justifyContent:'center', 
        alignItems:'center'    
    },
    servicesWrapper: {
        backgroundColor: 'white', 
        paddingTop: 9, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
})