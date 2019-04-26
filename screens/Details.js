import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import { graphql } from 'react-apollo';
import { withTheme, Card, FAB, Paragraph } from 'react-native-paper'
import StreamingIcons from '../component/StreamingIcons'
import StyledFAB from '../component/StyledFAB'


export default Details = (props) => {
    const { item } = props.navigation.state.params

    return (
        <View>
            <Card style={styles.card} >
                <Card.Cover style={styles.cover} source={{ uri: item.poster_fullPath }} />
                <Card.Content styles={styles.content}>
                    <FAB
                        style={styles.fab}
                        icon={({ size, color }) => (
                            <StyledFAB number={item.popularity} />
                        )}
                    />
                    <StreamingIcons streaming={item.streamingServices} />
                    <Paragraph style={styles.paragraph}>{item.overview}</Paragraph>
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
        width: '90%',
        margin: '5%',
        padding: 0,
        position: "relative"
    },
    cover: {
        height:200,
        width:"60%",
        marginLeft:"20%",
        marginRight:"20%"
    },
    content: {
    },
    paragraph: {
        opacity: 0.6,
        height: 100,
        fontSize: 12,
        fontWeight: '100',
        lineHeight: 15,
        marginTop: 10,
        marginLeft: -10
    }
})

// export default graphql()(withTheme(Details))