import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from 'react-apollo'

import Home from './screens/Home'

const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io"
});


const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    }
},
    { initialRouteName: 'Home' }
);

let Nav = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Nav />
                </View>
            </ApolloProvider>
        )
        
    }
}


