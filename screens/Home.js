import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { ActivityIndicator, Colors, Card, FAB, Paragraph, Searchbar, Button, withTheme, Appbar } from 'react-native-paper';
import StreamingIcons from '../component/StreamingIcons'
import icons from '../images';

import StyledFAB from '../component/StyledFAB'

const query = gql`{
    searchPopularMovies {
        id
        popularity
        overview
        poster_fullPath
        streamingServices {
          company {
            id
            name
            iconURL
          }
          web_url
          android_url
          ios_url
        }
    }
}`

class Home extends React.Component {

    renderCards = ({ item }) => {
        const { navigate } = this.props.navigation
        // 
        return (
            <View style={styles.card}>
                <Card onPress={() => navigate('Details', { item })}>
                    <Card.Cover style={styles.cover} source={{ uri: item.poster_fullPath }} />
                    <Card.Content styles={styles.content}>
                        <FAB
                            style={styles.fab}
                            icon={({ size, color }) => (
                                <StyledFAB number={item.popularity} />
                            )}
                        />
                        <StreamingIcons streaming={item.streamingServices} />
                        <Paragraph style={styles.paragraph}>{item.overview}</Paragraph>
                    </Card.Content>
                </Card>
            </View>
        )
    }


    render() {
        const { loading, error, data: { searchPopularMovies } } = this.props
        if (loading)
            return <ActivityIndicator styles={styles.loading} animating={true} color={Colors.red800} />

        if (error)
            return <Text>Error...</Text>

        return (
            <View style={[styles.renderBox, { backgroundColor: this.props.theme.colors.background }]}>
                <Appbar.Header>
                    <Appbar.Content
                        title='Popular Movies'
                    />
                </Appbar.Header>
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
    },
    paragraph: {
        opacity: 0.6,
        height: 100,
        fontSize: 12,
        fontWeight: '100',
        lineHeight: 15,
        marginTop: 10,
        marginLeft: -10
    }
})

// export default graphql(query)(Home)
export default graphql(query)(withTheme(Home))