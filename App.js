import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, BottomTabBar } from 'react-navigation'
import Explore from './src/screens/explore'
import Wishlist from './src/screens/wishlist'
import Chat from './src/screens/chat'
import Login from './src/screens/login'

const BottomNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({ tintColor }) => (<Ionicons name='ios-search' size={28}  color={tintColor} />)
      }
    },
    Wishlist: {
      screen: Wishlist,
      navigationOptions: {
        tabBarLabel: 'Wishlist',
        tabBarIcon: ({ tintColor }) => (<Ionicons name='ios-heart-empty' size={28} color={tintColor} />)
      }
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: ({ tintColor }) => (<Ionicons name='ios-chatboxes' size={28} color={tintColor} />)
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarLabel: 'Login',
        tabBarIcon: ({ tintColor }) => (<Ionicons name='ios-person' size={28} color={tintColor} />)
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray'
    }
  }
)

const AppNavigator = createStackNavigator(
  {
    Main: BottomNavigator,
    Wishlist: Wishlist,
    Chat: Chat,
    Login: Login,
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(AppNavigator)