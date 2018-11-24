import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Content } from 'native-base'

class Home extends Component {
    render() {
        return (
            <Content
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#dedede',
                }}
            >
                <Text style={{ padding: 10 }}>
                    Json App Builder (JAB) is a way to build apps, reusing code and saving time. Just imagine that you
                    can build a website from a set of components just using a json configuration. All this is possible
                    with JAB.
                </Text>
                <Text style={{ padding: 10 }}>
                    Things that can be done with JAB: build your own wix, render different layouts based on user
                    preferences, change the UI remotely without reloading, build a component library, etc.
                </Text>
            </Content>
        )
    }
}

export default Home
