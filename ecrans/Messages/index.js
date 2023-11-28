import { View, Text, ScrollView, Image} from 'react-native'
import React from 'react'
import dashboardStyles from './style'

const Messages = () => {
    return (
        <ScrollView>
          {/* début du header */}
          <View style={dashboardStyles.header}>
            <Text style={dashboardStyles.userName}>Amandine DOE</Text>
            <Image style={dashboardStyles.userImage} source={require('./../../assets/images/JaneDOE.jpg')} />
          </View> 
          <View >
            <Text style={dashboardStyles.userName}>Ma messagerie</Text>
            </View>
          {/* fin du header */}
          {/* début du liste des activités */}
    
          {/* fin du liste des activités */}
    
        </ScrollView>
      )
}

export default Messages