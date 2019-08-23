import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, BottomTabBar,createSwitchNavigator } from 'react-navigation'
// import ExploreNavigator from './src/screens/explore'
import Wishlist from './src/screens/wishlist'
import Chat from './src/screens/chat'
import Login from './src/screens/login'
// import RegistrationNavigator from './src/screens/login';
import HomeNavigator from './src/screens/homeNavigator'

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    HomeNavigator: HomeNavigator,
    Wishlist: Wishlist,
    Chat: Chat,
   
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(AppNavigator)