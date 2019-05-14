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

    const item2 = {
      "genres": [
        {
          "id": 12,
          "name": "Adventure",
        },
        {
          "id": 878,
          "name": "Science Fiction",
        },
        {
          "id": 28,
          "name": "Action",
        },
      ],
      "id": 299534,
      "original_language": "en",
      "original_title": "Avengers: Endgame",
      "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      "popularity": 303.658,
      "poster_fullPath": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "release_date": "2019-04-24",
      "runtime": null,
      "streamingServices": [
        {
          "android_url": null,
          "company": {
            "iconURL": "https://images.justwatch.com/icon/811323/s100/",
            "id": 60,
            "name": "Fandango",
          },
          "ios_url": null,
          "web_url": "http://www.fandango.com/redirect.aspx?searchby=moverview&mid=215871",
        },
      ],
      "tagline": null,
      "title": "Avengers: Endgame",
      "vote_average": 8.6,
      "vote_count": 4845,
    }
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
          >
            {({ loading, error, data: { searchPopularMovies } }) => {
              if (loading) return <ActivityIndicator styles={styles.loading} animation={true} color={Colors.red800} />
              if (error) return `Error! ${error}`;
              return <MovieCards title={query} items={searchPopularMovies} onItemClicked={this.onItemClicked} />
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

              return <MovieCards title={query} items={searchByTitle} onItemClicked={this.onItemClicked} />

            }}
          </Query>
        }
        {/* {this.onItemClicked()}zero
     */}
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

