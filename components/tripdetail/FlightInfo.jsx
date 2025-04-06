import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../constants/Colors'


export default function FlightInfo({flightData}) {
    
    useEffect(()=>{
        // console.log(flightData)
        // console.log(flightData.arrivalAirport)
    },[])
  return flightData && (
    <View style={{
        marginTop:30,

    }}>
        <View style={{
            backgroundColor:Colors.BG_LOGIN,
            padding:10,
            borderRadius:5,
            borderWidth:2,
            borderColor:Colors.BG_LOGIN
        }}>
       <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        marginBottom:10,

       }}>
       <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20,
        marginTop:10
        
      }}>Flights ✈️</Text>

       <TouchableOpacity style={{
        backgroundColor:Colors.PRIMARY,
        width:100,
        padding:10,
        borderRadius:5,
       

      }} onPress={()=>{ToastAndroid.show("To Be Implemented...", ToastAndroid.SHORT)}
      }>
        <Text style={{
            fontFamily:'outfit',
            fontSize:10,
            color:Colors.WHITE,
            textAlign:'center'
        }}>Book Now</Text>
      </TouchableOpacity>
       </View>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:12,
      }}>Arrival Airport : {flightData.arrivalAirport}</Text>
       <Text style={{
        fontFamily:'outfit-medium',
        fontSize:12,
      }}>Prices : {flightData.priceEstimate}</Text>
      </View>

      
      {/* <Text style={{
        fontFamily:'outfit',
        fontSize:15,
        marginTop:20
      }}>Note : {flightData.note}</Text> */}
    </View>
  )
}