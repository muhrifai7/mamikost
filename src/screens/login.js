import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left/>
                        <Body>
                            <Title>Login</Title>
                        </Body>
                    <Right />
                </Header>
            </Container>
        );
    }
}