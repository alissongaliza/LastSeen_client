import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ApolloClient from "apollo-boost";
import Home from './screen/Home'

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
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


