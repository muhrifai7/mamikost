import React, { Component } from 'react';
import { View, Image, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
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
            <View>
                <View style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 2}}>
                    <Text>Promo</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                    {promos.map((link, index) => {
                        return (
                            <Card key={index} style={{flex: 1, height: 200, width: 400, marginHorizontal: 10}} transparent >
                                <CardItem style={{flexDirection: 'column'}}>
                                    <TouchableHighlight>
                                        <Image 
                                            source={{uri: link.imageUrl}} 
                                            style={{ flex: 1, aspectRatio: 2.5, resizeMode: 'contain'}}
                                        />
                                    </TouchableHighlight>
                                </CardItem>
                            </Card>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}