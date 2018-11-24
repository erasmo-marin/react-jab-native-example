import React, { Component } from 'react'
import { Container, Footer, FooterTab, Button, Text } from 'native-base'
import map from 'lodash/map'

class AppFooter extends Component {
    onItemClick = transition => {
        this.props.executeTransition(transition)
    }

    render() {
        const { tabs } = this.props

        return (
            <Footer>
                <FooterTab>
                    {map(tabs, ({ title, transition }, index) => (
                        <Button onPress={() => this.onItemClick(transition)} key={index}>
                            <Text>{title}</Text>
                        </Button>
                    ))}
                </FooterTab>
            </Footer>
        )
    }
}

export default AppFooter
