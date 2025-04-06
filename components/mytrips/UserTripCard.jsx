import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors';
import moment from 'moment'
import { useRouter } from 'expo-router';
export default function UserTripCard({trip}){
    const tripData= JSON.parse(trip.tripData);
    const router = useRouter();
    
  return (
    <TouchableOpacity style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    }}
    onPress={()=>router.push({'pathname':'/trip-details', 
        params:{
           docId:trip.docId
        }})}
    >
       <Image source={{ uri: tripData?.locationInfo?.photoURL || require('./../../assets/images/placeholder.jpeg')}}style={{
                  width:100,
                  height:100,
                  objectFit:'cover',
                  borderRadius:15,
                  marginTop:10
              }}/>
        <View style={{
            width:200
        }}>
            <Text style={
                            {
                                fontFamily:'outfit-bold',
                                fontSize:15,
                                marginTop:5
                            }
                }
                numberOfLines={1}
                ellipsizeMode="tail"
                >{trip.tripPlan.travelPlan.location}</Text>

            <Text style={
                            {fontFamily:'outfit',
                                fontSize:15,
                                color:Colors.textlight
                            }
                        }>{moment(tripData.startDate).format("DD MMM YYYY")}</Text>    

            <Text style={
                            {fontFamily:'outfit',
                                fontSize:15,
                                color:Colors.textlight
                            }
                        }>🚐 {tripData.traveler.title}</Text>
        </View>
    </TouchableOpacity>
  )
}