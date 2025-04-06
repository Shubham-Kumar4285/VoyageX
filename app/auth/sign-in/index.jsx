import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from './../../../constants/Colors';
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword} from "firebase/auth";
import {auth} from './../../../configs/FirebaseConfig'


export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();

    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    

    useEffect(()=>{
        navigation.setOptions({headerShown:false})

    },[])
    const onSignIn=()=>{
       if (!email || !password) {
            ToastAndroid.show("Please fill out all information!", ToastAndroid.SHORT);
            return;
        }
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(email)) {
              ToastAndroid.show("Please enter a valid email address.", ToastAndroid.SHORT);
              return;
            }
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("sign in success")
          router.replace('/MyTrip')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage,errorCode)
        });
    }



  return (
    <View style={{
      padding:25,
      paddingTop:20,
      backgroundColor:'#eff',
      height:'100%'
      
      }}>
        <TouchableOpacity onPress={()=>router.back()}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        

      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:20
      }}>Let's Sign you In</Text>
      <Text style={{
        fontFamily:'outfit-light',
        fontSize:30,
        color:Colors.textlight,
        marginTop:20
      }}>Welcome Back, 😊</Text>
      <Text style={{
        fontFamily:'outfit-light',
        fontSize:30,
        color:Colors.textlight,
        marginTop:20
      }}>You've been missed</Text>


      <View style={{marginTop:50}}>
        <Text style={{fontFamily:'outfit'}}>Email</Text>
        <TextInput 
        style={styles.input}
        placeholder='Enter Email' onChangeText={(value)=>setEmail(value)}/>
      </View>

      <View>
        <Text style={{fontFamily:'outfit',marginTop:10}}>Password</Text>
        <TextInput 
        style={styles.input}
        secureTextEntry={true}
        placeholder='Enter Password'
        onChangeText={(value)=>setPassword(value)}
        />
      </View>

      <TouchableOpacity style={{
        padding:20,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:50,

      }}
      onPress={onSignIn}
      >
        <Text style={{color:Colors.WHITE,textAlign:'center',fontFamily:'outfit'}}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        padding:20,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        marginTop:20,
        borderWidth:1

      }}
      onPress={()=>router.replace('auth/sign-up')}
      
      
      >
        <Text style={{textAlign:'center',fontFamily:'outfit'}}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  input:{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    borderColor:Colors.textlight,
    fontFamily:'outfit'
  }
})