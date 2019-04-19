import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Home from './screens/Home'

const client = new ApolloClient({
    uri: "http://192.168.56.1:4000"
});


const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };

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
            <View style={{ flex: 1 }}>
                <ApolloProvider client={client}>
                    <PaperProvider theme={theme}>
                        <Nav />
                    </PaperProvider>
                </ApolloProvider>
            </View>
        )

    }
}


