import React, { Component } from 'react'
import { Button, StyleSheet, ScrollView, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import { createStackNavigator } from 'react-navigation'


import ListViewNav from './listView'
import DetailView from './detailView'
import Promo from '../components/promo'
import Place from '../components/place'
import CityDetail from '../screens/cityDetail'
import ListDorm from '../screens/listDorm'
import FilterPage from './filterPage'
import Booking from './booking'
import Booklist from './booklist'

class Explore extends Component {
    
    static navigationOptions= ({ navigation }) => (
        {
            headerStyle: {
                elevation: 0,
            },
            headerLeft: (
                <TouchableHighlight>
                    <Icon name="flame" size={30} style={styles.iconGreen}/>
                </TouchableHighlight>
            ),
            title: 'mamikos.com',
            headerTitleStyle: {
                color: 'green'
            },
            headerRight: (
                <TouchableOpacity onPress={() => (navigation.navigate('ListView'))}>
                    <Icon name='search' size={28} style={{color: 'green', marginRight: 14}}/>
                </TouchableOpacity>
            )
        } 
        
        )
    
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#white'}}>
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
                <ScrollView>
                    <Promo />
                    <View style={styles.adsBorder}>
                        <View style={{flex: 2, alignSelf: 'center'}}>
                            <Text style={{marginLeft: 20, fontSize: 24, color: 'green'}}>Ingin pasang iklan?</Text>
                        </View>
                        <View style={{flex: 1, alignSelf: 'center'}}>
                            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={styles.text}>Pasang</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Place action={() => this.props.navigation.navigate('CityDetail')}/>
                </ScrollView>
            </View>
        )
    }
}



const ExploreNavigator = createStackNavigator(
        {
            Explore: Explore,
            ListView: ListViewNav,
            ListDorm:ListDorm,
            DetailView: DetailView,
            CityDetail: CityDetail,
            FilterPage: FilterPage,
            Booking: Booking,
            Booklist:Booklist
        },
        {
            initialRouteName: 'Explore',
            headerMode: 'float'
        }
    
)

ExploreNavigator.navigationOptions = ({navigation}) => {
    let { routeName } = navigation.state.routes[navigation.state.index]
        let navigationOptions = {}
        if ( routeName === 'ListView' || routeName === 'FilterPage' || routeName === 'CityDetail') {
            navigationOptions.tabBarVisible = false
        }
        return navigationOptions
}

export default ExploreNavigator


const styles = StyleSheet.create({
    iconGreen: {
        color: 'green',
        marginLeft: 20,
    },
    adsBorder: { 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        marginVertical: 20, 
        borderWidth: 1, 
        borderColor: 'silver', 
        borderRadius: 23, 
        marginHorizontal: 10
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
    text: {
        color: 'white'
    },
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'green',
        padding: 18,
        paddingTop: 16,
        width: 100,
        borderRadius: 20,
        elevation: 10,
        margin: 4
    },
})