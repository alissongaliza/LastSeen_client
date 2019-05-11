import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import { withTheme, Card, FAB, Paragraph } from 'react-native-paper'
import StreamingIcons from '../component/StreamingIcons'
import StyledFAB from '../component/StyledFAB'


const Details = (props) => {
  const { item } = props.navigation.state.params

  renderGenres = () => {
    return item.genre_ids.map(el => <Text>{el.name}</Text>)
  }

  return (
    <View>
      <Card style={styles.card} theme={{ colors: { surface: '#08141B' } }}>
        <Card.Cover style={styles.cover} source={{ uri: item.poster_fullPath }} />
        <Card.Content styles={styles.content}>
          <FAB
            style={styles.fab}
            icon={({ size, color }) => (
              <StyledFAB number={item.popularity} />
            )}
          />
          <StreamingIcons streaming={item.streamingServices} />
          <View style={styles.statsSection}>
            <Text>{`Original title: ${item.original_title}`}</Text>
            <Text>{`Original language: ${item.original_language}`}</Text>
            {item.genre_ids != null ? this.renderGenres() : null}
            <Text>{`Release date: ${item.release_date}`}</Text>
            <Text>{`Runtime: ${item.runtime}`}</Text>
            <Text>{`Vote count: ${item.vote_count}`}</Text>
            <Text>{`Vote average: ${item.vote_average}`}</Text>
          </View>
          <Paragraph style={styles.title}>{item.title}</Paragraph>
          <Paragraph style={styles.description}>{item.overview}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  )
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
    width: '100%',
    // margin: '5%',
    padding: 0,
    // position: "relative"
  },
  cover: {
    height: 200,
    // width:"60%",
    // marginLeft:"20%",
    // marginRight:"20%"
  },
  content: {
  },
  description: {
    opacity: 0.6,
    height: 100,
    fontSize: 12,
    fontWeight: '100',
    lineHeight: 15,
    marginTop: 10,
    marginLeft: -10
  }
})

export default withTheme(Details)