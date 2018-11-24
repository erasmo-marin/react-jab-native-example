import React, { Component } from 'react'
import { Header, Left, Body, Right, Title, Subtitle } from 'native-base'

class Navbar extends Component {
    render() {
        const { title = '', subtitle = '' } = this.props

        return (
            <Header style={{ backgroundColor: 'red' }}>
                <Left />
                <Body>
                    <Title style={{ color: 'white' }}>Title</Title>
                    <Subtitle style={{ color: 'white' }}>Subtitle</Subtitle>
                </Body>
                <Right />
            </Header>
        )
    }
}

export default Navbar
