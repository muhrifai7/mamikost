import React, { Component } from 'react';
import { Image, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const promos = [
    {
        imageUrl: 'https://static.mamikos.com/uploads/cache/data/user/2019-02-06/tYYKBgjd-360x480.jpg'
    },
    {
        imageUrl: 'https://static.mamikos.com/uploads/cache/data/user/2019-05-10/A82cx34O-360x480.jpg'
    },
    {
        imageUrl: 'https://static.mamikos.com/uploads/cache/data/user/2019-08-02/T71F3KDd-360x480.jpg'
    }
]

export default class Promo extends Component {
    render() {
        return (
            <ScrollView horizontal={true}>
                {promos.map((link, index) => {
                    return (
                        <Card key={index} style={{height: 250, marginHorizontal: 10}} transparent >
                                <CardItem style={{flexDirection: 'column'}}>
                                    <TouchableHighlight>
                                        <Image 
                                            source={{uri: link.imageUrl}} 
                                            style={{height: 160, width: 500, flex: 1}}
                                        />
                                    </TouchableHighlight>
                                </CardItem>
                        </Card>
                    )
                })}
            </ScrollView>
        )
    }
}