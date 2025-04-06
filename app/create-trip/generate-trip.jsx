import { View, Text,Image,ActivityIndicator} from 'react-native'
import React,{useContext, useEffect, useState} from 'react'
import { Colors } from '../../constants/Colors'
import { AI_PROMPT } from '../../constants/Options'
import { CreateTripContext } from '../../context/CreateTripContext'
import { chatSession } from '../../configs/AIModel'
import { useRouter } from 'expo-router'
import {auth,db} from './../../configs/FirebaseConfig'
import {setDoc,doc } from "firebase/firestore"; 



export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading,setLoading] = useState(false);
  const user = auth.currentUser;

  const router = useRouter();

  useEffect(()=>{
    tripData && GenerateAiTrip()
  },[])

  const GenerateAiTrip=async()=>{
    setLoading(true);
    const FINAL_PROMOPT=AI_PROMPT.replace('{location}',tripData.locationInfo.name)
    .replace('{days}',tripData.totalDays)
    .replace("{budget}",tripData.budget)
    console.log(FINAL_PROMOPT)
    console.log("hello")
    try {
      const result = await chatSession.sendMessage(FINAL_PROMOPT);
      const curr = result.response.text();
      const res = JSON.parse(curr);
      const docId = Date.now().toString();
    
      const result_ = await setDoc(doc(db, "UserTrips", docId), {
        userEmail: user.email,
        tripData: JSON.stringify(tripData),
        tripPlan: res,
        docId: docId,
      });
    
      setLoading(false);
      router.replace("(tabs)/MyTrip");
    } catch (error) {
      console.error("Error processing trip plan:", error);
      setLoading(false);
    }

  }

  return (
    <View style={{
                    padding: 25,
                    paddingTop: 50,
                    backgroundColor:Colors.WHITE,
                    height: "100%",
                  }}>
                <Text
                        style={{
                          fontFamily: "outfit-bold",
                          fontSize: 30,
                          marginBottom: 10,
                          textAlign:'center'
                        }}
                      >
                      Please Wait ...
                      </Text>

                      <Text
                        style={{
                          fontFamily: "outfit-medium",
                          fontSize: 20,
                          marginBottom: 10,
                          textAlign:'center'
                        }}
                      >
                      Working to generate your perfect Trip plan
                      </Text>
                    <Image source={require('./../../assets/images/truck.gif')}
                           style={{
                            width:'100%',
                            height:300,
                            objectFit:'contain'
                           }} 
                            />
                    <Text
                        style={{
                          fontFamily: "outfit-bold",
                          fontSize: 20,
                          marginBottom: 20,
                          marginTop:50,
                          textAlign:'center'
                        }}
                      >
                      Please don't close the app
                      </Text>
                      {loading && <ActivityIndicator size={'large'} color={Colors.PRIMARY}/>}
    </View>
  )
}