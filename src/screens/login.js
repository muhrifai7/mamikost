import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

import WhiteHeader from '../components/whiteHeader'

export default class Login extends Component {
    render() {
        return (
            <Container>
                <WhiteHeader 
                    title={<Title>Login</Title>} 
                />
            </Container>
        );
    }
}