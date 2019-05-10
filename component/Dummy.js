import React from 'react'
import { graphql } from "react-apollo";
import { GetSpecificMovie } from '../queries'
import MovieCards from './MovieCards';
import { ActivityIndicator, Colors } from 'react-native-paper';

class Dummy extends React.Component {

  render() {
    const { data: { searchByTitle }, title, loading, error } = this.props

    if (loading)
      return <ActivityIndicator animating={true} color={Colors.red800} />

    if (error)
      return <Text>Error...</Text>

    return (
      <MovieCards title={title} items={searchByTitle} />
    )
  }
}

export default graphql(GetSpecificMovie, {
  options: ({ title }) => ({ variables: { title } })
})(Dummy)