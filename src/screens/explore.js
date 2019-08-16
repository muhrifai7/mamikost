import React, { Component } from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import ListView from './listView'
import Promo from '../components/promo'

class Explore extends Component {
    
    static navigationOptions= ({ navigation }) => (
        {
            headerStyle: {
            elevation: 0,
            },
            headerLeft: (
                <TouchableHighlight>
                    <Icon name="barcode" size={28} style={{ color: 'green', paddingLeft: 8}}/>
                </TouchableHighlight>
            ),
            title: 'mamikos.com',
            headerTitleStyle: {
                color: 'green'
            },
            headerRight: (
                <TouchableHighlight onPress={() => (navigation.navigate('ListView'))}>
                    <Icon name='search' size={28} style={{ color: 'green', paddingRight: 10}}/>
                </TouchableHighlight>
            )
        } 
        
        )
    
            

    render() {
        
        return (
            <View style={{backgroundColor: '#e8edea'}}>
                <View style={{backgroundColor: 'white', paddingTop: 9, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
                        <Icon name='bed' style={{ color: 'green'}}/>
                        <Text style={{ color: 'green'}}>Kostan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
                        <Icon name='business' style={{ color: 'green'}}/>
                        <Text style={{ color: 'green'}}>Hotel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
                        <Icon name='basket' style={{ color: 'green'}}/>
                        <Text style={{ color: 'green'}}>Toko</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
                        <Icon name='briefcase' style={{ color: 'green'}}/>
                        <Text style={{ color: 'green'}}>Kerja</Text>
                    </TouchableOpacity>
                </View>
                <Promo />
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
