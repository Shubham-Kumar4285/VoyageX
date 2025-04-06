import React, { useState ,useEffect,useContext} from "react";
import { View, Text, StyleSheet ,TouchableOpacity} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { Calendar } from "react-native-calendars";
import {CreateTripContext} from './../../context/CreateTripContext'

export default function SelectDate() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState("");
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router= useRouter();

  useEffect(()=>{
          setTripData({...tripData,
              startDate:selectedDate,
              totalDays:3 //static allocation -> can be changed later on
          })
          console.log(tripData)
          
      },[selectedDate])
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  return (
    <View
      style={{
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
        Select Date 📅
      </Text>

      <View style={{ marginTop: 20 ,borderRadius:15,padding:2}}>
        <Calendar 
        style={{borderRadius:15,fontFamily:'outfit'}}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          
          markedDates={{
            [selectedDate]: { selected: true, marked: true, selectedColor: "blue" },
          }}
          theme={{
            selectedDayBackgroundColor: "blue",
            todayTextColor: "red",
          }}
        />
      </View>

      {selectedDate && (
        <TouchableOpacity style={{
            backgroundColor:Colors.PRIMARY,
            padding:15,
            borderRadius:15,
            marginTop:30,
            alignItems:'center',

            
        }} onPress={() => router.push('/create-trip/select-budget')}>
            
            <Text style={{
                color:Colors.WHITE,
                fontFamily:'outfit',
                fontSize:15
            }}>Continue</Text>
            
        </TouchableOpacity>
      )}
      
    </View>
  );
}