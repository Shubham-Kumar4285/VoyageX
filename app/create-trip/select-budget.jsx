import { View, Text, FlatList ,TouchableOpacity} from 'react-native'
import React ,{useEffect, useState,useContext} from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { BudgetOptionsList } from '../../constants/BudgetOptions';
import BudgetCard from '../../components/createtrip/BudgetCard';
import {CreateTripContext} from './../../context/CreateTripContext'

export default function SelectBudget() {
    const navigation = useNavigation();
    const [selectedBudget, setSelectedBudget] = useState('');
    const { tripData, setTripData } = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(()=>{
            navigation.setOptions({headerShown:true,headerTransparent:true,headerTitle:''})
        },[])

     useEffect(()=>{   
            setTripData({...tripData,
                budget:selectedBudget.title,
                Amount:selectedBudget.priceRange
            })
        },[selectedBudget])

    useEffect(()=>{
        console.log(tripData)
    },[tripData])

  return (
    <View style={{
            padding: 25,
            paddingTop: 50,
            backgroundColor: Colors.BG_LOGIN,
            height: "100%",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 30,
              marginBottom: 20,
            }}
          >
            Choose Budget 💰
          </Text>
          <FlatList
            data={BudgetOptionsList}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <TouchableOpacity
                    onPress={()=>{setSelectedBudget(item)}}
                >
                    <BudgetCard option={item} selectedBudget={selectedBudget}></BudgetCard>
                    </TouchableOpacity>
            )}
          >
          </FlatList>
          {selectedBudget &&(<TouchableOpacity style={{
                          backgroundColor:Colors.PRIMARY,
                          padding:15,
                          borderRadius:15,
                          marginTop:10,
                          alignItems:'center',
          
                          
                      }} onPress={() => router.push('/create-trip/review-trip')}>
                          
                          <Text style={{
                              color:Colors.WHITE,
                              fontFamily:'outfit',
                              fontSize:15
                          }}>Continue</Text>
                          
                      </TouchableOpacity>)}
                      
    </View>
  )
}