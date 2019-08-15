import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Icon,  Header, Left, Body, Right, Button, Thumbnail, Title, Text } from 'native-base';

import WhiteHeader from '../components/whiteHeader';
import { BorderlessButton } from 'react-native-gesture-handler';

export default class Explore extends Component {
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
                        <Content>
                            <Row>
                                <Text style={{ fontSize: 28, color: 'silver'}}>Hai</Text>
                            </Row>
                            <Row>
                                <Text>Ini searchbar</Text>
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

const styles = StyleSheet.create({
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
    }
})