import { View, Text,ScrollView, Image , FlatList } from 'react-native'
import React from 'react'
import dashboardStyles from './style'
import { FakeActivity } from '../../fakeData/fakeActivity'


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
            <Text style={dashboardStyles.userName}>Liste</Text>
            </View>
      {/* début du liste des activités */}
		<FlatList
		horizontal={true}
		data={FakeActivity}
		keyExtractor={item=>item.id}
		showsHorizontalScrollIndicator={false}
		style={dashboardStyles.scrollableList}	
		renderItem={({item})=>{
			return(
				<View style={dashboardStyles.scrollableListItem}>
					<View style={dashboardStyles.card}>
						{/* <My_icon />	 */}
						<View style={dashboardStyles.cardImgWrapper}>
							<Image
								source={item.image}
								resizeMode="cover"
								style={dashboardStyles.cardImg}
							/>
						</View>
						<View style={dashboardStyles.cardInfo}>
							<Text style={dashboardStyles.cardTitle}>{item.title}</Text>
							<Text style={dashboardStyles.cardDetails}>{item.description}</Text>
							<Text style={dashboardStyles.cardDetails}>{item.category}</Text>
							<Text style={dashboardStyles.cardDetails}>{item.date}</Text>
							<Text style={dashboardStyles.cardDetails}>{item.time}</Text>
							<Text style={dashboardStyles.cardDetails}>{item.location}</Text>
							<Text style={dashboardStyles.cardDetails}>{item.price}</Text>
							<Text style={dashboardStyles.cardDetails}>{item.participants}</Text>
							<Text style={dashboardStyles.cardDetails}>{item.maxParticipants}</Text>
							<Text style={dashboardStyles.cardDetails}>{item.organizer}</Text>
							<Text style={dashboardStyles.cardDetails}>{item.organizerDescription}</Text>
							<Text style={dashboardStyles.cardDetails}>{item.organizerEmail}</Text>
						</View>
					</View>
				</View>
			)
		}}/>
      {/* fin du liste des activités */}

    </ScrollView>
  )
}

export default Home