import { View, Text ,TextInput,StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './../../../configs/FirebaseConfig'
import { Colors } from './../../../constants/Colors';

export default function SignUp() {

  const navigation = useNavigation();
  const router = useRouter();

  const [email,setEmail] = useState('');
  const [password,setPassword]= useState('');
  const [fullname,setFullName]= useState('');

  useEffect(()=>{
      navigation.setOptions({headerShown:false})
  
  },[])
  //sign up functionality
  const onCreateAccount = () => {
    // Check if the fields are filled out
    //console.log("Working")
    if (!email || !password || !fullname) {
      ToastAndroid.show("Please fill out all information!", ToastAndroid.SHORT);
      return;
    }
  
    // Simple email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      ToastAndroid.show("Please enter a valid email address.", ToastAndroid.SHORT);
      return;
    }
  
    // Simple password strength check (at least 6 characters)
    if (password.length < 6) {
      ToastAndroid.show("Password must be at least 6 characters.", ToastAndroid.SHORT);
      return;
    }
  
    // Call Firebase createUserWithEmailAndPassword
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log(user);
        
        ToastAndroid.show("Account created successfully!", ToastAndroid.SHORT);
        router.replace('/MyTrip')
        // You can navigate to a different screen or do additional work here
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
  
        // Handle specific errors (you can add more cases if needed)
        if (errorCode === 'auth/email-already-in-use') {
          ToastAndroid.show("This email is already in use. Please use another one.", ToastAndroid.SHORT);
        } else {
          ToastAndroid.show("Error creating account. Please try again later.", ToastAndroid.SHORT);
        }
      });
  };

  return (
    <View style={{
      padding:25,
      paddingTop:20,
      backgroundColor:Colors.BG_LOGIN,
      height:'100%'
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
                fontFamily:'outfit-bold',
                fontSize:30,
                marginTop:20
        }}>Create a new Account
      </Text>
      {/* full name */}
      <View style={{marginTop:50}}>
        <Text style={{fontFamily:'outfit'}}>Name</Text>
        <TextInput 
          style={styles.input}
          placeholder='Full Name'
          onChangeText={(value)=>setFullName(value)}/>
      </View>


      {/* Email option*/}
      <View style={{marginTop:10}}>
        <Text style={{fontFamily:'outfit'}}>Email</Text>
        <TextInput 
          style={styles.input}
          placeholder='Enter Email'
          onChangeText={(value)=>setEmail(value)}/>
      </View>


       {/* password option*/}
      <View>
        <Text style={{fontFamily:'outfit',marginTop:10}}>Password</Text>
        <TextInput 
          style={styles.input}
          secureTextEntry={true}
          placeholder='Enter Password'
          onChangeText={(value)=>setPassword(value)}/>
      </View>


      {/* Sign up option*/}
      <TouchableOpacity style={{
        padding:20,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:50,
        }}
        onPress={onCreateAccount}
        >
        <Text style={{color:Colors.WHITE,textAlign:'center',fontFamily:'outfit'}}>Sign Up</Text>
      </TouchableOpacity>

      {/* sign in page */}
      <TouchableOpacity style={{
              padding:20,
              backgroundColor:Colors.WHITE,
              borderRadius:15,
              marginTop:20,
              borderWidth:1
      
            }}
            onPress={()=>router.replace('auth/sign-in')}
            
            
            >
              <Text style={{textAlign:'center',fontFamily:'outfit'}}>Already Have an account? Sign In</Text>
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