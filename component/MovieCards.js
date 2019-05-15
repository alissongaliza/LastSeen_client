import React from 'react'
import { View, StyleSheet, FlatList } from "react-native";
import {  Card, FAB, Paragraph } from 'react-native-paper';
import _ from 'lodash'
import StreamingIcons from '../component/StreamingIcons';
import StyledFAB from '../component/StyledFAB';

export default ({ items, onItemClicked }) => {

  renderCards = ({ item }) => {
    return (
      <Card onPress={() => onItemClicked(item)} style={styles.card}>
        <Card.Cover style={styles.cover} source={{ uri: item.poster_fullPath }} />
        <Card.Content style={styles.content}>
          <FAB
            style={styles.fab}
            icon={({ size, color }) => (
              <StyledFAB number={item.popularity} />
            )}
          />
          <StreamingIcons streaming={item.streamingServices} maxIcons={4} iconStyles={styles.streamingIcon} alwaysRender={true} />
          <Paragraph style={styles.paragraph}>{item.overview}</Paragraph>
        </Card.Content>
      </Card>)
  }

  return (
    <View style={styles.box}>
      <FlatList
        numColumns={2}
        data={_.orderBy(items, ['popularity'], ['desc'])}
        keyExtractor={(item, index) => item.id}
        renderItem={this.renderCards}
      />
    </View>
  )

}



const styles = StyleSheet.create({
  loading: {
    padding: 5,
    margin: 10
  },
  streamingIcon: {
    width: 15,
    height: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    top: -8
  },
  icon: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    top: -10
  },
  box: {
  },
  fab: {
    position: 'absolute',
    margin: 5,
    right: 1,
    top: -20,
    width: 30,
    height: 30,
    backgroundColor: '#ef3e36'
  },
  card: {
    width: '40%',
    margin: '5%',
    height: 320,
    padding: 0
  },
  cover: {
  },
  content: {
    height: 100
  },
  paragraph: {
    opacity: 0.6,
    height: 102,
    fontSize: 12,
    fontWeight: '100',
    lineHeight: 15,
    marginTop: -10,
    marginLeft: -10,
    marginRight: -10
  }
})