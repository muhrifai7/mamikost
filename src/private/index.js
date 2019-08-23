import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, BottomTabBar } from 'react-navigation'
import ExploreNavigator from '../screens/explore'
import Wishlist from '../screens/wishlist'
import Chat from '../screens/chat'
import Login from '../screens/login'
import RegistrationNavigator from './src/screens/login';

class Private extends Component {
    
    static navigationOptions= ({ navigation }) => (
        {   title: 'Search City',
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
        <Text>private</Text>
            {/* <NavbarButton />
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
                    <KotaPopuler action={() => this.props.navigation.navigate('ListView')}/>
                </ScrollView>
            </View> */}
        )
    }
}
export default Private

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