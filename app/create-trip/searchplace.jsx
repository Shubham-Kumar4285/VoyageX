import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet  } from 'react-native'
import React, { useContext, useEffect,useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import {CreateTripContext} from './../../context/CreateTripContext'
import 'react-native-get-random-values';
import axios from 'axios';





export default function SearchPlace() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const { tripData, setTripData } = useContext(CreateTripContext);
    const location_key = process.env.EXPO_PUBLIC_LOCATION_API;
    const photo_key = process.env.EXPO_PUBLIC_PHOTO_API;
    
    
    const router = useRouter();

  //  useEffect(()=>{
  //   console.log(tripData)
  //  },[tripData]);


    const fetchSuggestions = async (text) => {
     

      
        if (text.length > 2) { 
          try {
            const response = await fetch(
              `https://api.locationiq.com/v1/autocomplete?key=${location_key}&q=${text}`
            );
            const data = await response.json();
            setSuggestions(data);
            console.log('Updated suggestions:', data);

          } catch (error) {
            console.error('Error fetching suggestions:', error);
          }
        } else {
          setSuggestions([]); 
        }
      };

      const handleSelect = async (place) => {
        //console.log('Selected Place:', place);
        setQuery(place.display_name);
        const photoUrl = await fetchPhoto(place.display_name);
        //console.log(photoUrl)
        setTripData({
            locationInfo:{
                name:place.display_name,
                lat:place.lat,
                lon:place.lon,
                photoURL:photoUrl
            }
        });
        router.push('/create-trip/select-traveler')
        
        
        setSuggestions([]); // Clear suggestions
      };
      
      

      const fetchPhoto = async (photoName) => {
        //console.log(photoName)
        const API_KEY =photo_key;
       
        const url = `https://api.pexels.com/v1/search?query=${photoName}location&per_page=1`;
      
        if (!API_KEY) {
          console.error('API Key is missing!');
          return null;
        }
       // console.log("hello")
      
        try {
          const response = await axios.get(url, {
            headers: {
              Authorization: API_KEY,
            },
          });
      
          
          const photo = response.data.photos && response.data.photos[0];
      
          if (photo) {
            console.log('Photo found:', photo.src.medium);
            return photo.src.medium; // Return photo URL if found
          } else {
            console.log('No photos found for query:', photoName);
            return null; // Return null if no photo is found
          }
        } catch (error) {
          // Log the error and response for further debugging
          console.error('Error fetching photo:', error);
      
          // Log the full response if available to inspect the error more deeply
          if (error.response) {
            console.error('Error Response:', error.response.data);
          }
      
          return null;
        }
      };


    const navigation = useNavigation();
    useEffect(
        ()=>{
            navigation.setOptions({headerShown:true,headerTransparent:true,headerTitle:'Search'})
        }
    ,[])
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.BG_LOGIN,
        height:'100%'
    }}>
    

    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a location"
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          fetchSuggestions(text); // Fetch autocomplete suggestions
        }}
      />
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.place_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.suggestion} onPress={() => handleSelect(item)}>
            <Text style={{fontFamily:'outfit'}}>{item.display_name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>

    

      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    input: {
        fontFamily:'outfit',
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 8,
      marginBottom: 8,
      borderRadius:10,
      padding:20
    },
    suggestion: {
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
  });
  
  