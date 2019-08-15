import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

export default class Wishlist extends Component {
    render() {
        return (
        <Container>
            <GreenHeader 
                    title={<Title>Wishlist</Title>} 
                />
        </Container>
        );
    }
}