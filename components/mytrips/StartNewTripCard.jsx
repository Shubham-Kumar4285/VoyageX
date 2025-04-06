import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';


export default function StartNewTripCard() {
    const router = useRouter();
  return (
    <View style={{
        padding:25,
        marginTop:20,
        display:'flex',
        alignItems:'center'
    }}>
        <Entypo name="location-pin" size={30} color="black" />
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20,
            marginTop:10
        }}>No trips planned yet</Text>
        <Text style={{
            fontFamily:'outfit',
            fontSize:15,
            marginTop:10
        }}>Time to plan your escape and make unforgettable memories! ✈️</Text>
        <TouchableOpacity style={{
            padding:20,
            backgroundColor:Colors.PRIMARY,
            borderRadius:20,
            marginTop:20

        }} onPress={()=>router.push('/create-trip/searchplace')}>
            <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20,
            color:Colors.WHITE
        }}>Plan Now📝</Text>
        </TouchableOpacity>
      
    </View>
  )
}