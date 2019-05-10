import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { ApolloConsumer, Query } from "react-apollo"
import { ActivityIndicator, Colors, Card, FAB, Paragraph, Searchbar, Button, withTheme, Appbar } from 'react-native-paper';
import StreamingIcons from '../component/StreamingIcons';
import Dummy from '../component/Dummy';
import { GetSpecificMovie, GetPopularMovies } from '../queries'

import StyledFAB from '../component/StyledFAB';
import MovieCards from "./MovieCards";

class Dummy2 extends React.Component {

    state = {
        query: 'war',
        popular: true
    }


    render() {
        const { query, popular } = this.state
        return (
            <View>
                <Searchbar
                    placeholder='Popular Movies'
                    value={query}
                    onChangeText={query => { this.setState({ query }) }}
                    onIconPress={() => this.setState({ popular: false })}
                />
                {popular ?
                    <Query
                        query={GetPopularMovies}
                        skip={!popular}
                    >
                        {({ loading, error, data: { searchPopularMovies } }) => {
                            if (loading) return null;
                            if (error) return `Error! ${error}`;

                            return (
                                <View style={[styles.renderBox, { backgroundColor: this.props.theme.colors.background }]}>

                                    <MovieCards title={query} items={searchPopularMovies} />

                                </View>
                            )
                        }}
                    </Query>
                    :
                    <Query
                        query={GetSpecificMovie}
                        variables={{ title: query }}
                    >
                        {({ loading, error, data: { searchByTitle } }) => {
                            if (loading) return null;
                            if (error) return `Error! ${error}`;

                            return (
                                <View style={[styles.renderBox, { backgroundColor: this.props.theme.colors.background }]}>

                                    <MovieCards title={query} items={searchByTitle} />

                                </View>
                            )
                        }}
                    </Query>
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    loading: {
        padding: 5,
        margin: 10
    },
    fab: {
        position: 'absolute',
        margin: 5,
        right: 1,
        top: -20,
        width: 30,
        height: 30,
        backgroundColor: '#ef3e36'
        // bottom: 60,
        // width: "30%"
    },
    card: {
        width: '40%',
        margin: '5%',
        height: 400,
        padding: 0
    },
    cover: {
        // width:'100%',
        // position:'relative'
    },
    content: {
        height: 200,
        // backgroundColor:'black',
    },
    paragraph: {
        opacity: 0.6,
        height: 100,
        backgroundColor: 'black',
        fontSize: 12,
        fontWeight: '100',
        lineHeight: 15,
        marginTop: 10,
        marginLeft: -10
    }
})

export default withTheme(Dummy2)
