/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container } from 'native-base'
import Core, { Registry } from 'react-jab'
import { NativeRouter } from 'react-router-native'
import Navbar from './components/globals/navbar'
import Footer from './components/globals/footer'
import Home from './components/pages/home'
import About from './components/pages/about'
import config from './config'

export default class App extends Component {
    render() {
        return (
            <Container style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                <Core
                    registry={
                        new Registry({
                            navbar: Navbar,
                            footer: Footer,
                            home: Home,
                            about: About,
                        })
                    }
                    router={NativeRouter}
                    config={config}
                />
            </Container>
        )
    }
}
