import { View, Text,Image, TouchableOpacity,ToastAndroid } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { openMap } from '../../configs/MapRedirect'


export default function TripPlan({tripPlanData}) {
  return (
    <View style={{
        marginTop:20
    }}>
      <Text style={{
              fontFamily:'outfit-bold',
              fontSize:20,
             }} >Plan Details 📝 </Text>

        {Object.entries(tripPlanData).map(([day,detail])=>(
            <View style={{
                marginTop:20
            }}>
                
                <Text style={{
                    fontFamily:'outfit-bold',
                    marginTop:10,
                    fontSize:18,
                }}>Day : {detail.day}</Text>
                <Text style={{
                    fontFamily:'outfit-bold',
                    fontSize:18,
                    marginBottom:10
                }}>📌 {detail.theme}</Text>
                
            {Object.entries(detail.schedule).map(([i,todo])=>(
                <View style={{
                    marginTop:15,
                    borderRadius:12,
                    borderWidth:2,
                    padding:5,
                    borderColor:Colors.BG_LOGIN
                }}>
                    <Image style={{
                                width:'100%',
                                height:100,
                                borderRadius:10,
                                marginRight:15
                            }}source={require('./../../assets/images/plan-placeholder.jpeg')} />
                    <View style={{
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'center'
                        
                    }}>
                        <View style={{
                            width:'85%'
                        }}>
                    <Text style={{
                         fontFamily:'outfit-bold',
                         fontSize:15
                    }}>{todo.activity || todo.placeName}</Text>
                    <Text style={{
                         fontFamily:'outfit',
                         fontSize:12,
                         color:Colors.textlight
                    }}>{todo.description || todo.placeDetails}</Text>
                    <Text style={{
                         fontFamily:'outfit-bold',
                         fontSize:12,
                         color:Colors.textlight
                    }}>⌚ : {todo.time}</Text>
                    </View>

                    <TouchableOpacity onPress={()=>{ToastAndroid.show("To Be Implemented...", ToastAndroid.SHORT)}
                          } >
                    <Ionicons name="navigate-circle" size={40} color="#2F52E0" />
                    </TouchableOpacity>
                    </View>
                </View>
            )
            )}
            </View>
        )
        )}
    </View>
  )
}