import React, { Component } from 'react'
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

export default class Listview extends Component {
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
            </Container>
        )
    }
}