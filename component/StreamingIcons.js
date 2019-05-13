import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default ({ streaming, iconStyles, maxIcons=Number.MAX_SAFE_INTEGER }) => {

    renderCompanies = () => {
        if(streaming == null)
            return null
        
        maxIndex = maxIcons > streaming.length ? streaming.length : maxIcons
        listOfStreaming = streaming.slice(0,maxIndex)
        
        return (
            <React.Fragment>
                {listOfStreaming.map(({ company }) => {
                    return (<Image key={company.id} source={{ uri: company.iconURL }} style={iconStyles} />)

                })}
            </React.Fragment>

        )
    }

    return (
        <View style={styles.box}>
            {renderCompanies()}
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flexWrap: 'wrap',
        width: '80%',
        flexDirection: 'row'
    }
})