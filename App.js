import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'
import { DefaultTheme, Provider as PaperProvider, withTheme, Appbar } from 'react-native-paper';

import Home from './screens/Home'
import Details from './screens/Details'

const client = new ApolloClient({
    uri: "http://192.168.0.18:4000"
});


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'white',
        accent: '#08141B',
        background: '#02010a',
        text: 'white',
        surface: '#08141B',
        placeholder:'#a1a1a1'
    },
    fonts:{
        ...DefaultTheme.fonts
    }
};

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
          header: null
        }
    },
    Details:{
        screen: Details,
        navigationOptions: ({ navigation }) => ({
          title: `${navigation.state.params.item.title}`,
          headerStyle:{backgroundColor:'#08141B'},
          headerTintColor:'#a1a1a1'
        })
    }
},
    { initialRouteName: 'Home'}
);

let Nav = createAppContainer(AppNavigator);
export default class App extends React.Component {
    render() {
        return (
            //<View style={{ flex: 1, backgroundColor:'black' }}>
                <ApolloProvider client={client}>
                    <PaperProvider theme={theme}>
                            <Nav />
                    </PaperProvider>
                </ApolloProvider>
            //</View>
        )

    }
}


