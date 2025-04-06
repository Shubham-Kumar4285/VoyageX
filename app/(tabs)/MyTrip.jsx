import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState} from 'react'
import { Colors } from '../../constants/Colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import StartNewTripCard from '../../components/mytrips/StartNewTripCard';
import { collection, getDocs, query,where } from 'firebase/firestore';
import { auth,db } from '../../configs/FirebaseConfig';
import UserTripList from '../../components/mytrips/UserTripList';
import { useRouter } from 'expo-router';


export default function MyTrip() {
    const user = auth.currentUser;

    const [userTrips,setUserTrips] = useState([]);
    const [loading,setLoading] = useState(false)
    const router = useRouter();

   

    useEffect(()=>{
        GetMyTrips()
    },[])
    useEffect(()=>{
        console.log(userTrips)
    },[userTrips])
    const GetMyTrips=async()=>{
        setUserTrips([]);
        setLoading(true)
        try {
            const q = query(collection(db, "UserTrips"),where('userEmail', '==', user.email));//to be changed later on
            const querySnapshot = await getDocs(q);
            
            if (querySnapshot.empty) {
                console.log("No matching documents found.");
            } else {
                const trips = [];
                querySnapshot.forEach(doc => {
                    trips.push(doc.data());
                });
                setUserTrips(trips);

            }
            setLoading(false)
        } catch (error) {
            console.error("Error fetching documents:", error);
        }
        
    }
  return (
    <View style={{

        paddingRight:20,
        paddingLeft:20,
        paddingTop:30,
        
        height:'100%',
        backgroundColor:Colors.BG_LOGIN,
        
    }}>
        
        <View style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
        }}>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:30
            }}>My Trips</Text>
            <TouchableOpacity onPress={()=>router.push('/create-trip/searchplace')
            }>
                <MaterialIcons name="add-circle-outline" size={40} color="black" />
            </TouchableOpacity>
        </View>
        
        { !loading && userTrips.length==0 &&
            <StartNewTripCard/>
        }
        { !loading &&userTrips.length!=0 &&
            <UserTripList trips={userTrips} />
        }
        {loading && <ActivityIndicator size={'large'} color={Colors.PRIMARY}/>}
    </View>
  )
}