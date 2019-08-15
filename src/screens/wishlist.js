import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

export default class Wishlist extends Component {
    render() {
        return (
        <Container>
            <Header>
                <Left/>
                    <Body>
                        <Title>Wishlist</Title>
                    </Body>
                <Right />
            </Header>
        </Container>
        );
    }
}