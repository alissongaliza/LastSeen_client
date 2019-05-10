
import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { ActivityIndicator, Colors, Card, FAB, Paragraph, Searchbar, Button, withTheme, Appbar } from 'react-native-paper';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import StreamingIcons from '../component/StreamingIcons';


specificMovie = gql`
query searchByTitle($title:String!){
    searchByTitle(title:$title){
        id
        title
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

class SearchList extends React.Component{

    renderCards = ({ item }) => {
        const { navigate } = this.props.navigation

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
        const { loading, error, data: { searchByTitle } } = this.props
        if (loading)
            return <ActivityIndicator styles={styles.loading} animating={true} color={Colors.red800} />

        if (error)
            return <Text>Error...</Text>

        return (
            <View style={[styles.renderBox, { backgroundColor: this.props.theme.colors.background }]}>
                {/* <Searchbar
                    placeholder='Search'
                    value={this.state.query}
                    onChangeText={query => {this.setState({ query })}}
                    onIconPress={() => navigate('ListOfMovies', {query : this.state.query})}
                    
                /> */}
                {/* <Appbar.Header>
                    <Appbar.Content
                        title='Popular Movies'
                    />
                </Appbar.Header> */}
                <FlatList
                    // style={styles.cardList}
                    numColumns={2}
                    data={searchByTitle}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this.renderCards}
                />
            </View>
        )
    }


}

export default graphql(specificMovie,{
    options:{variables:{title:this.props.navigation.params.query}}
})(SearchList)

