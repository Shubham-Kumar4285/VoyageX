import { View, Text ,Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import UserTripCard from './UserTripCard';
import { useRouter } from 'expo-router';

export default function UserTripList({trips}) {
    //console.log(trips[0].tripData.travelPlan.location)
    const tripData= JSON.parse(trips[0].tripData)
    const router = useRouter();
    
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        marginTop:20
      }}>
        <Image
  source={{ uri: tripData?.locationInfo?.photoURL || require('./../../assets/images/placeholder.jpeg')}}
  style={{
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: 15,
  }}
  
/>

        <View>
            <Text style={
                {
                    fontFamily:'outfit-medium',
                    fontSize:20,
                    marginTop:10
                }
            }>{trips[0].tripPlan.travelPlan.location}</Text>
            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                marginTop:5
            }}>
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
            <TouchableOpacity 
            style={{
                backgroundColor:Colors.PRIMARY,
                padding:15,
                borderRadius:15,
                marginTop:10,
                alignItems:'center',
            
            }}
            onPress={()=>router.push({'pathname':'/trip-details', 
                params:{
                   docId:trips[0].docId
                }})}
            >
                <Text style={{
                   color:Colors.WHITE,
                    fontFamily:'outfit',
                    fontSize:15
                }}>Show Plan</Text>
            </TouchableOpacity>
        </View>
        {trips.map((trip, index) => (
            <UserTripCard trip={trip} />
        ))}

      </View>
    </ScrollView>
  )
}