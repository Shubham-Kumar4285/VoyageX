import { View, Text ,Image} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Colors } from '../../constants/Colors'

export default function HotelList({hotelData}) {
    
  return (
    <View style={{
        marginTop:20,

    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20,
       }} >Hotel Recommendations 🏨 </Text>
       <FlatList
       data={hotelData}
       style={{
        marginTop:10
       }}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       renderItem={({item,index})=>(
        <View style={{
            borderRadius:10,
            
        }} key={index} >
            <Image style={{
                width:150,
                height:100,
                borderRadius:10,
                marginRight:15
            }}source={require('./../../assets/images/hotel-placeholder.jpeg')} />
            <Text style={{
                width:150,
                fontFamily:'outfit-bold'
            }}>{item.hotelName}</Text>
             <Text style={{
                width:150,
                fontFamily:'outfit-medium',
                fontSize:13
            }}>⭐{item.ratingDescription.substring(0, item.ratingDescription.indexOf('star')-1)}</Text>
            <Text style={{
                width:150,
                fontFamily:'outfit-medium',
                fontSize:13
            }}>💰{item.price.substring(0, item.price.indexOf('night')+5)}</Text>
        </View>


       )}
        ></FlatList>
       
    </View>
  )
}