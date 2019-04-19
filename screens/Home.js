import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { ActivityIndicator, Colors } from 'react-native-paper';

const query = gql`{
    searchPopularMovies{
        title
    }
}`

const Home = ({ data: { searchPopularMovies, loading, error } }) => {

    if (loading)
        return <ActivityIndicator styles={styles.loading} animating={true} color={Colors.red800} />

    if (error)
        return <Text>Error...</Text>
    return (
        <View style={styles.renderBox}>
            {
                searchPopularMovies.map(({ title }) => <Text key={title}>{title}</Text>)
            }
        </View>
    )

}

const styles = StyleSheet.create({
    loading: {
        padding: 5,
        margin: 10
    },
    renderBox: {
        flex: 1
    }
})

export default graphql(query)(Home)