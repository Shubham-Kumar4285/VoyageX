import { View, Text,Image, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import React ,{useEffect, useState}from 'react'
import { router, useLocalSearchParams, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import moment from 'moment'
import { collection, getDocs, query,where,doc, deleteDoc } from 'firebase/firestore';
import { auth,db } from '../../configs/FirebaseConfig';
import FlightInfo from '../../components/tripdetail/FlightInfo';
import HotelList from '../../components/tripdetail/HotelList';
import TripPlan from '../../components/tripdetail/TripPlan';

export default function TripDetails() {

    const navigation = useNavigation();
    const {docId} = useLocalSearchParams();

    const user = auth.currentUser;

    const [userTrips,setUserTrips] = useState([]);
    const [loading,setLoading] = useState(false);
    
    useEffect(()=>{
        //console.log("Working in seondary")
        GetMyTrips()
    },[])

    const formatData=(data)=>{
      return JSON.parse(data);
    }
    useEffect(
            ()=>{
                navigation.setOptions({headerShown:true,headerTransparent:true,headerTitle:''})
            }
        ,[])

    // useEffect(()=>{
    //     console.log("Working in seondary")
    //     //console.log(userTrips[0])
    //     //console.log(userTrips[0]?.tripPlan.flightDetails)
    // },[userTrips])

    const GetMyTrips=async()=>{
        setUserTrips([]);
        setLoading(true)
        try {
          console.log(docId)
            const q = query(collection(db, "UserTrips"),where('userEmail', '==',user.email));//to be changed later on
            const querySnapshot = await getDocs(q);
            
            if (querySnapshot.empty) {
                console.log("No matching documents found.");
            } else {
                const trips = [];
                querySnapshot.forEach(doc => {
                  if(doc.data().docId===docId){
                    trips.push(doc.data());
                  }
                    
                });
                setUserTrips(trips);
            }
            setLoading(false)
        } catch (error) {
            console.error("Error fetching documents:", error);
        }
        
    }

    const deleteDocument = async () => {
        try {
          const docRef = doc(db, "UserTrips", docId);
          await deleteDoc(docRef);
          console.log(`Document with ID: ${docId} has been deleted.`);
          router.back();
        } catch (error) {
          console.error("Error deleting document:", error);
        }
      };
      
            
  return userTrips.length!=0 && (
    <ScrollView style={{

    }}> {loading && <ActivityIndicator size={'large'} color={Colors.PRIMARY}/>}
       
        <Image source={{ uri: formatData(userTrips[0]?.tripData).locationInfo.photoURL || require('./../../assets/images/placeholder.jpeg')}}
            style={{
              width: '100%',
              height: 250,
              
            }}
          />

        <View style={{
            padding:15,
            backgroundColor:Colors.WHITE,
            height:'100%',
            borderTopLeftRadius:20,
            marginTop:-30,
            borderTopRightRadius:20
        }}>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:20
            }}>{formatData(userTrips[0]?.tripData).locationInfo.name}</Text>
            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between'
                
            }}>
                <View>
                <Text style={{
                    fontFamily:'outfit',
                    fontSize:15
                }}>Starting Date : {moment(formatData(userTrips[0]?.tripData).startDate).format("DD MMM YYYY")}</Text>

                <Text style={
                    {fontFamily:'outfit',
                        fontSize:15,
                        color:Colors.textlight
                    }
                }>🚐 {formatData(userTrips[0]?.tripData).traveler.title}</Text>

                
                </View>
                <TouchableOpacity onPress={()=>{deleteDocument()}}>
                <Image source={require('./../../assets/images/trash.png')} 
                style={{
                    width:50,
                    height:50,
                    objectFit:'contain'
                }}/>
                </TouchableOpacity>
                

            </View>
            {/*Flight info
        
        */}
            <FlightInfo flightData={userTrips[0]?.tripPlan.flightDetails}></FlightInfo>
            {/*Hotel info
        
        */}
            <HotelList hotelData={userTrips[0]?.tripPlan.hotelOptions}></HotelList>
            {/*Trip plan
            
        
        */}
        <TripPlan tripPlanData={userTrips[0]?.tripPlan.dailyItinerary}></TripPlan>
            
        </View>
        
    </ScrollView>
  )
}