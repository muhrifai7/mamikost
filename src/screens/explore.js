import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, 
        Content, 
        Icon,  
        Header, 
        Left, 
        Body, 
        Right, 
        Button, 
        Thumbnail, 
        Title, 
        Text } from 'native-base'
import { SearchBar } from 'react-native-elements'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import WhiteHeader from '../components/whiteHeader'
import ListView from '../screens/listView'

export default class Explore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }

    updateSearch = (search) => {
        this.setState({
            search: search
        })
    }

    render() {
        return (
            <Container >
                <WhiteHeader 
                    button={<Button transparent>
                                <Icon name='home' style={{ color: 'green'}}/>
                            </Button>}
                    title={<Title style={styles.greenColor}>Mamaclone</Title>}
                />
                <Grid>
                    <Row size={4} style={{ backgroundColor: 'white', borderColor: 'green' }}>
                        <Col >
                            <Button iconLeft transparent>
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
                    <Row size={15} style={{ borderColor: 'green', backgroundColor: 'white'}}>
                        <Content style={styles.textAndSearchbar}>
                            <Row>
                                <Text style={styles.haiStyle}>Hai, mau cari kost di mana?</Text>
                            </Row>
                            <Row>
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
                        </Content>
                    </Row>
                    <Row size={55} style={{ backgroundColor: 'blue'}}>
                        
                    </Row>
                </Grid>
            </Container>
        );
    }
}

const ExploreNavigator = createStackNavigator(
    {
        ListView: ListView,
    },
    {
        initialRouteName: 'Explore',
        headerMode: 'none'
    }
)

createAppContainer(ExploreNavigator)

const styles = StyleSheet.create({
    inputContainerStyleSearchbar: {
        backgroundColor: 'white', 
        borderWidth:1, 
        borderColor: 'white',
        marginTop: 0,
        borderRadius: 50
    },
    containerStyleSearchbar: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: 350,
        borderRadius: 50,
        marginTop: 12
    },
    whiteColor: {
        color: 'white'
    },
    containerHead: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    containerServices: {
        marginBottom: 2,
    },
    greenColor: {
        color: 'green',
    },
    silverColor: {
        color: 'gray'
    },
    haiStyle: { 
        fontSize: 23, 
        color: 'green'
    },
    textAndSearchbar: {
        alignSelf: 'center',
        marginHorizontal: 35,
    }
})