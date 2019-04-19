import React from "react";
import { View, Text } from "react-native";
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";

const query = gql`{
    searchPopularMovies{
        title
    }
}`

const Home = ({ data: { searchPopularMovies,loading,error}  }) => {
// const Home = (props) => {
    // console.log(props);
    
    if(loading)
        return <Text>Loading...</Text>
    if(error)
        return <Text>Error...</Text>
    return (
        <View style={{ flex: 1 }}>
            {
                searchPopularMovies.map(({ title }) => <Text key={title}>{title}</Text>)
            }
        </View>
    )



}

export default graphql(query)(Home)