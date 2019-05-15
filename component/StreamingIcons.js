import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity,Linking } from 'react-native'


export default ({ streaming, iconStyles, maxIcons = Number.MAX_SAFE_INTEGER, alwaysRender = false, shouldOpenLinks = false }) => {

  onIconClicked = (streaming) => {
    console.log(streaming.android_url);
    
    if (streaming.android_url) {
      
        Linking.canOpenURL().then(supported => {
          if (supported) {
            Linking.openURL(streaming.android_url);
          } else {
            alert('You dont have the app installed')
          }
        });
      
    }

    else if(streaming.web_url){
      Linking.openURL(streaming.web_url);

    }
  }
  renderCompanies = () => {
    if (streaming == null || streaming.length == 0)
      return alwaysRender ? <View style={{ width: iconStyles.width, height: iconStyles.height }}></View> : null

    maxIndex = maxIcons > streaming.length ? streaming.length : maxIcons
    listOfStreaming = streaming.slice(0, maxIndex)

    return (
      <React.Fragment>
        {listOfStreaming.map((streaming) => {
          if (streaming.company)
            return (
              <TouchableOpacity
                onPress={shouldOpenLinks ? () => this.onIconClicked(streaming) : null}
                key={streaming.company.id}>
                <Image
                  source={{ uri: streaming.company.iconURL }}
                  style={iconStyles}
                />
              </TouchableOpacity>
            )
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