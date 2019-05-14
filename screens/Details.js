import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import { withTheme, Card, FAB, Paragraph } from 'react-native-paper'
import StreamingIcons from '../component/StreamingIcons'
import StyledFAB from '../component/StyledFAB'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const Details = (props) => {
  const { item } = props.navigation.state.params

  renderGenres = () => {
    return item.genre_ids.map(el => <Paragraph>{el.name}</Paragraph>)
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
        {/* <Text>{`Original title: ${item.original_title}`}</Text> */}
        <View style={{ flex: 1 }}>
          <Paragraph>{`Language: ${item.original_language}`}</Paragraph>
          {item.genre_ids != null ? this.renderGenres() : null}
          <Paragraph>{`Release date: ${item.release_date}`}</Paragraph>
          <Paragraph>{`Runtime: ${item.runtime}`}</Paragraph>

        </View>
        <View style={{ flex: 1 }}>
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
        <StreamingIcons streaming={item.streamingServices} iconStyles={styles.streamingIcon} />

      </View>
    )
  }

  return (
    <View>
      <Card style={styles.card} theme={{ colors: { surface: '#08141B' } }}>
        <Card.Cover style={styles.cover} source={{ uri: item.poster_fullPath }} />
        <Card.Content styles={styles.content}>
          {renderTitle()}
          {renderStatsBar()}

          <Paragraph style={styles.description}>{item.overview}</Paragraph>
          {renderStreamingOptions()}
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
  icon: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 15,
    // top: -10
  },
  streamingIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 40,
    margin:1,
    // top: -10
  },
  statsSection: {
    backgroundColor: '#02010a',
    marginLeft: -15,
    marginRight: -16,
    paddingLeft: 10,
    paddingRight: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  title: {
    fontSize:18,
    textAlign:'center'
  },

  fab: {
    // position: 'absolute',
    // margin: 5,
    // right: 1,
    // top: -20,
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