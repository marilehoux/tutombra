import { View, Text,ScrollView, Image } from 'react-native'
import React from 'react'
import dashboardStyles from './style'
const Home = () => {
  return (
    <ScrollView>
      {/* début du header */}
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.userName}>Amandine DOE</Text>
        <Image style={dashboardStyles.userImage} source={require('./../../assets/images/JaneDOE.jpg')} />
      </View> 
      {/* fin du header */}
      <View >
            <Text style={dashboardStyles.userName}>Mon dashborad</Text>
            </View>
      {/* début du liste des activités */}

      {/* fin du liste des activités */}

    </ScrollView>
  )
}

export default Home