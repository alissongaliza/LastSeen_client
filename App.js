import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'
import { DefaultTheme, Provider as PaperProvider, withTheme, Appbar } from 'react-native-paper';

import Home from './screens/Home'
import Details from './screens/Details'

const client = new ApolloClient({
    uri: "http://150.165.202.211:4001"
});


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'white',
        accent: '#ef3e36',
        background: '#02010a',
        text: 'white',
        surface: '#153243'
    },
    fonts:{
        ...DefaultTheme.fonts
    }
};

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    Details:{
        screen: Details
    }
},
    { initialRouteName: 'Home' }
);

let Nav = createAppContainer(AppNavigator);
export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor:'black' }}>
                <ApolloProvider client={client}>
                    <PaperProvider theme={theme}>
                            <Nav />
                    </PaperProvider>
                </ApolloProvider>
            </View>
        )

    }
}


