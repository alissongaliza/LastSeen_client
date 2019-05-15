import React from 'react'
import { View, StyleSheet, ScrollView } from "react-native";
import { withTheme, Card, FAB, Paragraph, Text } from 'react-native-paper'
import StreamingIcons from '../component/StreamingIcons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Details = (props) => {
  const { item } = props.navigation.state.params

  renderGenres = () => {
    let commaCounter = item.genres.length     //just a counter that helps me render commas in-between genres

    return (
    <View style={{flexWrap: 'wrap',flexDirection: 'row',maxWidth:150}}>
        {item.genres.map(el => <Text key={el.id} style={styles.genreName}>
        {--commaCounter == 0? el.name : `${el.name}, `}
        </Text>)}
    </View>
    )
  }

  renderTitle = () => {
    return item.title == item.original_title ?
      <Paragraph style={styles.title}>{item.title}</Paragraph>
      :
      <Paragraph style={styles.title}>{`${item.title}( ${item.original_title} )`}</Paragraph>
  }

  renderStatsBar = () => {
    return (
      <View style={styles.statsSection}>
        <View style={{ flex: 1 }}>
          <Paragraph>{`Language: ${item.original_language}`}</Paragraph>
          <Paragraph>{`Release date: ${item.release_date}`}</Paragraph>
          <View style={{justifyContent: 'flex-start',flexDirection: 'row'}}>
            <Text>{'Genres: '}</Text>
            {this.renderGenres()}
          </View>

        </View>
        <View style={{ flex: 1 , marginLeft:0 }}>
          <View style={{ flexDirection: 'row' }}>

            <AntDesign name={'star'} size={30} color={'yellow'} />
            <View style={{ flexDirection: 'column' }}>
              <Paragraph style={{ fontSize: 20, marginLeft: 3, paddingTop: 3 }}>{item.vote_average}</Paragraph>
              <Paragraph style={{ fontSize: 10, marginTop: -7, marginLeft: 3 }}>{`${item.vote_count} votes`}</Paragraph>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons name={'whatshot'} size={30} color={'#e63407'} />
            <View style={{ flexDirection: 'column' }}>
              <Paragraph style={{ fontSize: 20, marginLeft: 3, paddingTop: 5 }}>{`${parseInt(item.popularity)}`}</Paragraph>
              <Paragraph style={{ fontSize: 10, marginTop: -9, marginLeft: 3 }}>{'on popularity'}</Paragraph>

            </View>

          </View>

        </View>
      </View>
    )

  }

  renderStreamingOptions = () => {
    return (
      <View style={styles.watchSection}>
        <Paragraph>Watch now on your favorite platform</Paragraph>
        <StreamingIcons streaming={item.streamingServices} iconStyles={styles.streamingIcon} shouldOpenLinks={true} />

      </View>
    )
  }

  return (
    <View style={{height:'100%'}}>
      <ScrollView style={{backgroundColor:'#08141B'}}>
        <Card style={styles.card} theme={{ colors: { surface: '#08141B' } }}>
          <Card.Cover style={styles.cover} source={{ uri: item.poster_fullPath }} />
          <Card.Content styles={styles.content}>
            <Paragraph style={styles.description}>{item.overview}</Paragraph>
            {renderStatsBar()}

            {renderStreamingOptions()}
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  loading: {
    padding: 5,
    margin: 10
  },
  genreName:{
    marginLeft:2
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 15
  },
  streamingIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 40,
    margin: 1
  },
  statsSection: {
    backgroundColor: '#02010a',
    marginTop: 5,
    marginLeft: -15,
    marginRight: -16,
    paddingLeft: 10,
    paddingRight: 10,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 5
  },

  fab: {
    width: 30,
    height: 30,
    backgroundColor: '#ef3e36'
  },
  card: {
    width: '100%',
    height:'100%'
  },
  cover: {
    height: 400
  },
  content: {
  },
  description: {
    opacity: 0.6,
    fontSize: 12,
    fontWeight: '100',
    lineHeight: 15,
    marginTop: 10,
    marginLeft: -10
  }
})

export default withTheme(Details)