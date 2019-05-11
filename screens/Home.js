import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Query } from "react-apollo";
import { ActivityIndicator, Colors, Searchbar, withTheme } from 'react-native-paper';
import { GetSpecificMovie, GetPopularMovies } from '../queries'
import MovieCards from "../component/MovieCards";

class Home extends React.Component {

  state = {
    query: 'war',
    popular: true
  }

  onItemClicked = (item) => {
    const { navigate } = this.props.navigation
    navigate('Details', { item })
  }

  render() {
    const { query, popular } = this.state
    return (
      <View style={[{ backgroundColor: this.props.theme.colors.background }]}>
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
              if (loading) return <ActivityIndicator styles={styles.loading} animation={true} color={Colors.red800} />
              if (error) return `Error! ${error}`;

              return <MovieCards title={query} items={searchPopularMovies} onItemClicked={this.onItemClicked}/>
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

              return <MovieCards title={query} items={searchByTitle} onItemClicked={this.onItemClicked}/>

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
    margin: 10,
    justifyContent: 'center'
  }
})

export default withTheme(Home)

