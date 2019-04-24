import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { ActivityIndicator, Colors, Card, FAB, Paragraph, Searchbar } from 'react-native-paper';

const query = gql`{
    searchPopularMovies{
        id
        title
        overview
        popularity
        poster_fullPath
    }
}`

class Home extends React.Component {

    renderCards = ({ item }) => {
        return (
            <View style={styles.card}>
                <Card >
                    {/* <Card.Title /> */}
                    <Card.Cover style={styles.cover} source={{ uri: item.poster_fullPath }} />
                    <Card.Content styles={styles.content}>
                        <FAB
                            style={styles.fab}
                            small
                            icon={({ size, color }) => (
                                <Text style={styles.fabText}>{item.popularity}</Text>
                            )}
                        />
                        <Paragraph style={styles.paragraph}>{item.overview}</Paragraph>
                    </Card.Content>
                </Card>
            </View>
        )
    }


    render() {
        const {loading, error, data:{searchPopularMovies}} = this.props
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
        top: -30
        // bottom: 60,
        // width: "30%"
    },
    fabText: {
        position: 'relative',
        width: "100%",
        fontSize: 12
    },
    card: {
        width: '40%',
        minHeight: 100,
        margin: '5%',
        height: 400,
        padding: 0
    },
    cover: {
        // width:'100%',
        // position:'relative'
    },
    content: {
    },
    paragraph: {
        opacity: 0.3,
        height: 200
    }
})

export default graphql(query)(Home)