import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <GreenHeader 
                    title={<Title>Login</Title>} 
                />
            </Container>
        );
    }
}