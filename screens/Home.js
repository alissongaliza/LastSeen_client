import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { ActivityIndicator, Colors, Card, FAB, Paragraph } from 'react-native-paper';

const query = gql`{
    searchPopularMovies{
        id
        title
        overview
        popularity
        poster_fullPath
    }
}`

const Home = ({ data: { searchPopularMovies, loading, error } }) => {

    renderCards = ({item}) => {
        return (
            <View style={styles.card}>
                <Card >
                    <Card.Title />
                    <Card.Cover style={styles.cover} source={{ uri: item.poster_fullPath }} />
                    <Card.Content>
                        <FAB
                            style={styles.fab}
                            icon={({ size, color }) => (
                                <Text style={styles.fabText}>{item.popularity}</Text>
                                )}
                                />
                        <Paragraph style={{ opacity: 0.3 }}>{item.overview}</Paragraph>
                    </Card.Content>
                </Card>
            </View>
        )
    }

    if (loading)
        return <ActivityIndicator styles={styles.loading} animating={true} color={Colors.red800} />

    if (error)
        return <Text>Error...</Text>
    return (
        <View style={styles.renderBox}>
            <FlatList
                // style={styles.cardList}
                numColumns={2}
                data={searchPopularMovies}
                keyExtractor={(item, index) => item.id}
                renderItem={this.renderCards}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    loading: {
        padding: 5,
        margin: 10
    },
    fab: {
        position: 'relative',
        margin: 5,
        right: 10,
        bottom: 60,
        // width: "30%"
    },
    fabText:{
        position: 'relative',
        width: "100%"
    },
    card:{
        width:120,
        minHeight : 100
    },
    cover:{
        // width:'100%',
        // position:'relative'
    }
})

export default graphql(query)(Home)