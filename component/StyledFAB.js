import React from 'react'
import { StyleSheet } from "react-native";
import { Button, Text } from 'react-native-paper';
import icons from '../images';

export default ({number}) => {
    return (
        <React.Fragment>
            <Button icon='expand-less' style={styles.popIcon}></Button>
            <Text style={styles.fabText}>{parseInt(number)}</Text>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    fabText: {
        position: 'absolute',
        left:-7,
        bottom:17,
        // backgroundColor:'pink',
        marginRight:10,
        fontSize: 8
    },
    popIcon:{
        // backgroundColor:'yellow',
        bottom:20,
        right:25
    }
})