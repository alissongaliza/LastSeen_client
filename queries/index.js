
import gql from "graphql-tag";

export const GetSpecificMovie = gql`
query searchByTitle($title:String!){
  searchByTitle(title:$title){
    title
    id
    original_language
    original_title
    overview
    release_date
    runtime
    tagline
    vote_average
    vote_count
    poster_fullPath
    popularity
    genres{
      name
      id
    }
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

export const GetPopularMovies = gql`{
  searchPopularMovies {
    title
    id
    original_language
    original_title
    overview
    release_date
    runtime
    tagline
    vote_average
    vote_count
    poster_fullPath
    popularity
    genres{
      name
      id
    }
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