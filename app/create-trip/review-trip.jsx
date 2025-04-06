import { View, Text, FlatList ,TouchableOpacity} from 'react-native'
import React ,{useEffect, useState,useContext} from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';

import {CreateTripContext} from './../../context/CreateTripContext'



export default function ReviewTrip() {
    const navigation = useNavigation();
    const { tripData, setTripData } = useContext(CreateTripContext);

    const router= useRouter();

    useEffect(()=>{
                navigation.setOptions({headerShown:true,headerTransparent:true,headerTitle:''})
            },[])


  return (
    <View style={{
                padding: 25,
                paddingTop: 50,
                backgroundColor: Colors.BG_LOGIN,
                height: "100%",
              }}>
                <Text
                  style={{
                    fontFamily: "outfit-bold",
                    fontSize: 30,
                    marginBottom: 10,
                  }}
                >
                Review Your Trip
                </Text>
                <View>
                <Text
                  style={{
                    fontFamily: "outfit-bold",
                    fontSize: 18,
                    marginBottom: 20,
                  }}
                >
                Before generating your plan, please review your selections
                </Text>
                </View>

                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                    <Text style={{
                        fontSize:20
                    }}>📌</Text>
                    <View style={{
                        padding:20
                    }}>
                    <Text style={{
                        fontFamily:'outfit-medium',
                        fontSize:20,
                        color:Colors.textlight
                    }}>Destination</Text>
                    <Text style={{
                        fontFamily:'outfit-bold',
                        fontSize:20
                    }}>{tripData.locationInfo.name}</Text>
                    </View>
                </View>

                
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                    <Text style={{
                        fontSize:20
                    }}>✈️</Text>
                    <View style={{
                        padding:20
                    }}>
                    <Text style={{
                        fontFamily:'outfit-medium',
                        fontSize:20,
                        color:Colors.textlight
                    }}>Travel Date</Text>
                    <Text style={{
                        fontFamily:'outfit-bold',
                        fontSize:20
                    }}>{tripData.startDate} ({tripData.totalDays} days)</Text>
                    </View>
                </View>


                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                    <Text style={{
                        fontSize:20
                    }}>{tripData.traveler.icon}</Text>
                    <View style={{
                        padding:20
                    }}>
                    <Text style={{
                        fontFamily:'outfit-medium',
                        fontSize:20,
                        color:Colors.textlight
                    }}>Who is traveling </Text>
                    <Text style={{
                        fontFamily:'outfit-bold',
                        fontSize:20
                    }}>{tripData.traveler.title}</Text>
                    </View>
                </View>

                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                    <Text style={{
                        fontSize:20
                    }}>💰</Text>
                    <View style={{
                        padding:20
                    }}>
                    <Text style={{
                        fontFamily:'outfit-medium',
                        fontSize:20,
                        color:Colors.textlight
                    }}>Budget</Text>
                    <Text style={{
                        fontFamily:'outfit-bold',
                        fontSize:20
                    }}>{tripData.budget}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{
                    backgroundColor:Colors.PRIMARY,
                    padding:15,
                    borderRadius:15,
                    marginTop:10,
                    alignItems:'center',
                          
                                          
                }} onPress={() => router.replace('/create-trip/generate-trip')}>
                                          
                    <Text style={{
                        color:Colors.WHITE,
                        fontFamily:'outfit',
                        fontSize:15
                    }}>Build My Trip</Text>
                                          
                </TouchableOpacity>
    </View>
  )
}