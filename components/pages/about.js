import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Content } from 'native-base'

class About extends Component {
    render() {
        return (
            <Content
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#eee',
                }}
            >
                <Text>This is the About view</Text>
            </Content>
        )
    }
}

export default About
