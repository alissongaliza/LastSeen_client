import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default ({ streaming }) => {

    renderCompanies = () => {

        return (
            <React.Fragment>
                {streaming.map(({ company }) => {
                    return (<Image key={company.id} source={{ uri: company.iconURL }} style={styles.icon} />)

                })}
            </React.Fragment>

        )
    }

    return (
        <View style={styles.box}>
            {/* {console.log(streaming)} */}
            {/* <Image source={{uri:streaming[0].company.iconURL}} style={{width:15,height:15,backgroundColor:'white'}} /> */}
            {renderCompanies()}
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flexWrap: 'wrap',
        width: '80%',
        flexDirection: 'row'
    },
    icon: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderRadius: 15
    }
})