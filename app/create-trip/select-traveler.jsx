import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState ,useContext} from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import{SelectTravellerList} from '../../constants/Options'
import OptionsCard from '../../components/createtrip/OptionsCard';
import {CreateTripContext} from './../../context/CreateTripContext'


export default function SelectTraveler() {
    const navigation = useNavigation();
    const [selectTraveler,setSelectTraveler] = useState('');
    const { tripData, setTripData } = useContext(CreateTripContext);

    const router = useRouter();

    useEffect(()=>{
        
        setTripData({...tripData,
            traveler:selectTraveler
        })
        
    },[selectTraveler])
    // useEffect(()=>{
    //     console.log(tripData)
    // },[tripData])

    useEffect(()=>{
        navigation.setOptions({headerShown:true,headerTransparent:true,headerTitle:''})
    },[])
  return (
    <View style={{
            padding:25,
            paddingTop:50,
            backgroundColor:Colors.BG_LOGIN,
            height:'100%'
        }}>
            <Text style={
                {
                    fontFamily:'outfit-bold',
                    fontSize:30,
                    
                }
            }>Who's Traveling ❓</Text>
            <Text style={
                {
                    fontFamily:'outfit',
                    fontSize:20,
                    marginTop:15
                    
                }
            }>Choose Your Travelers ...</Text>
            
            <FlatList
                data={SelectTravellerList}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index})=>(
                    <TouchableOpacity
                        onPress={()=>{setSelectTraveler(item)}}
                    >
                        <OptionsCard option={item} selectedTraveler={selectTraveler}/>
                    </TouchableOpacity>
                )}
                />

           
            {selectTraveler &&(<TouchableOpacity style={{
                backgroundColor:Colors.PRIMARY,
                padding:15,
                borderRadius:15,
                marginTop:10,
                alignItems:'center',

                
            }} onPress={() => router.push('/create-trip/select-dates')}>
                
                <Text style={{
                    color:Colors.WHITE,
                    fontFamily:'outfit',
                    fontSize:15
                }}>Continue</Text>
                
            </TouchableOpacity>)}
            

      
    </View>
  )
}