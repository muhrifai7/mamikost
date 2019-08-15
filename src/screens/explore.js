import React, { Component } from 'react';
import { Container, Icon,  Header, Left, Body, Right, Button, Thumbnail, Title, Text } from 'native-base';
import GreenHeader from '../components/greenHeader';

export default class Explore extends Component {
    render() {
        return (
            <Container>
                <GreenHeader 
                    button={<Button transparent>
                                <Icon name='home'/>
                            </Button>} 
                    title={<Title>Mamiclone</Title>}
                />
            </Container>
        );
    }
}