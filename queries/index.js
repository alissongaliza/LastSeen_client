
import gql from "graphql-tag";

export const GetSpecificMovie = gql`
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

export const GetPopularMovies =  gql`{
    searchPopularMovies {
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