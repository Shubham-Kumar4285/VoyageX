import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {

    const router = useRouter();
  return (
    <View>
      <Image source={require('./../assets/images/login-icon.png')}
      style={{
        width:'100%', 
        height:400,
        }}></Image>
      <View style={styles.container}>
        <Text style={{
            fontSize:25,
            fontFamily:'outfit-bold',
            textAlign:'center',
            marginTop:20}}>VoyageX</Text>
        <Text style={{
            fontSize:15,
            fontFamily:'outfit',
            textAlign:'center',
            marginTop:20,
            color:Colors.textlight
            }}>Plan your perfect trip effortlessly—AI-powered itineraries, tailored just for you!</Text>

        <TouchableOpacity style={styles.button} onPress={()=>router.push('auth/sign-in')}>
            <Text style={{color:Colors.WHITE,textAlign:'center',fontFamily:'outfit'}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.BG_LOGIN,
        marginTop:-20,
        height:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        padding:15
    },
    button:{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop:'25%'
        
    }
    
})