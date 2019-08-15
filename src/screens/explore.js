import React, { Component } from 'react';
import { Container, Icon,  Header, Left, Body, Right, Button, Thumbnail, Title, Text } from 'native-base';
import GreenHeader from '../components/greenHeader';

export default class Explore extends Component {
    render() {
        return (
            <Container>
                <Header style={{ flexDirection: 'row', backgroundColor: 'green'}}>
                    <Left>
                        <Button transparent>
                            <Icon name='home' />
                        </Button>
                    </Left>
                    <Body style={{ paddingLeft: 2}}>
                        <Title>Mamiclone</Title>
                    </Body>
                </Header>
            </Container>
        );
    }
}