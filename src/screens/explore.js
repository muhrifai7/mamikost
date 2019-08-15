import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { StyleProvider, Container, Icon, Tab, Tabs, TabHeading,  Header, Left, Body, Right, Button, Thumbnail, Title, Text } from 'native-base';

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
                <Tabs>
                    <Tab heading={ <TabHeading style={{ backgroundColor: 'green'}}><Icon name="navigate" /><Text>Camera</Text></TabHeading>}>
                    </Tab>
                    <Tab heading={ <TabHeading style={{ backgroundColor: 'green'}}><Icon name="person"/><Text>Test</Text></TabHeading>}>
                    </Tab>
                    <Tab heading={ <TabHeading style={{ backgroundColor: 'green'}}><Icon name="apps" /></TabHeading>}>
                    </Tab>
                    <Tab heading={ <TabHeading style={{ backgroundColor: 'green'}}><Icon name="apps" /></TabHeading>}>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    forTabs: {
        backgroundColor: 'green'
    }
})