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

















// import React, { Component } from 'react'
// import { Animated, Dimensions, StyleSheet, Image, TouchableHighlight, TouchableOpacity, View, Text, Platform } from 'react-native'
// import Slideshow from 'react-native-slideshow'
// import { Container, Icon } from 'native-base'
// import { createAppContainer, createStackNavigator } from 'react-navigation'

// import WhiteHeader from '../components/whiteHeader'
// import ListView from '../screens/listView'

// class Explore extends Component {
//     render() {
//         return (
//             <View style={{backgroundColor: '#e8edea'}}>
//                 <View style={{backgroundColor: 'white', paddingTop: 9, flexDirection: 'row', justifyContent: 'space-between'}}>
//                     <TouchableOpacity style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
//                         <Icon name='bed' style={{ color: 'green'}}/>
//                         <Text style={{ color: 'green'}}>Kostan</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
//                         <Icon name='business' style={{ color: 'green'}}/>
//                         <Text style={{ color: 'green'}}>Hotel</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
//                         <Icon name='basket' style={{ color: 'green'}}/>
//                         <Text style={{ color: 'green'}}>Toko</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
//                         <Icon name='briefcase' style={{ color: 'green'}}/>
//                         <Text style={{ color: 'green'}}>Kerja</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         );
//     }
// }

// const ExploreNavigator = createStackNavigator(
//     {
//         Explore: {
//             screen: Explore,
//             navigationOptions: {
//                 headerStyle: {
//                     elevation: 0,
//                 },
//                 headerLeft: (
//                     <TouchableHighlight>
//                         <Icon name="barcode" size={28} style={{ color: 'green', paddingLeft: 8}}/>
//                     </TouchableHighlight>
//                 ),
//                 title: 'mamikos.com',
//                 headerTitleStyle: {
//                     color: 'green'
//                 },
//                 headerRight: (
//                     <TouchableHighlight>
//                         <Icon name='search' size={28} style={{ color: 'green', paddingRight: 10}}/>
//                     </TouchableHighlight>
//                 )
//             }
//         },
//         ListView: ListView,
//     },
//     {
//         initialRouteName: 'Explore',
//         headerMode: 'float'
//     }
// )

// export default createAppContainer(ExploreNavigator)










//LEGACY

{/* <Container>
                <WhiteHeader 
                    button={<Button transparent>
                                <Icon name='home' style={{ color: 'green'}}/>
                            </Button>}
                    title={<Title style={styles.greenColor}>Mamaclone</Title>}
                />
                <Grid>
                    <Row size={1} style={{backgroundColor: 'white', borderColor: 'green' }}>
                        <Col >
                            <Button iconLeft transparent active>
                                <Icon name='bed' style={styles.greenColor} />
                                <Text style={styles.greenColor}>Kostan</Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button iconLeft transparent>
                                <Icon style={styles.greenColor} name='business' />
                                <Text style={styles.greenColor}>Hotel</Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button iconLeft transparent>
                                <Icon style={styles.greenColor} name='basket' />
                                <Text style={styles.greenColor}>Toko</Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button iconLeft transparent>
                                <Icon style={styles.greenColor} name='briefcase' />
                                <Text style={styles.greenColor}>Kerja</Text>
                            </Button>
                        </Col>
                    </Row>
                    <Row size={20} style={{backgroundColor: 'white'}}>
                        <View style={styles.textAndSearchbar}>
                            <Row size={1}>
                                <Text style={styles.haiStyle}>Hai, mau cari kost di mana?</Text>
                            </Row>
                            <Row size={4}>
                                <SearchBar
                                    inputContainerStyle={styles.inputContainerStyleSearchbar}
                                    containerStyle= {styles.containerStyleSearchbar }
                                    placeholderTextColor={'#g5g5g5'}
                                    placeholder="Cari tempat.."
                                    onChangeText={this.updateSearch}
                                    value={this.state.search}
                                    onChange={() => {this.props.navigation.navigate('ListView')}}
                                />
                            </Row>  
                        </View>
                    </Row>
                </Grid>
            </Container> */}