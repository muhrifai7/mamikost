import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

import GreenHeader from '../components/greenHeader'

export default class Chat extends Component {
    render() {
        return (
            <Container>
                <GreenHeader 
                    title={<Title>Chat</Title>} 
                />
            </Container>
        );
    }
}