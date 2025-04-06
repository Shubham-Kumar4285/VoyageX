import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


import { Colors } from '../../constants/Colors';

export default function TabLayout() {
  return (

      <Tabs screenOptions={{
        headerShown:false,
        tabBarTintColor:Colors.PRIMARY,
        
        }}>
        <Tabs.Screen name='MyTrip'
        options={{
            tabBarLabel:"My Trips",
            tabBarIcon:(color)=><MaterialIcons name="add-location" size={24} color={color} />
            
            }}/>
        <Tabs.Screen name='Discover'
        options={{
            tabBarLabel:"Discover",
            tabBarIcon:(color)=><MaterialCommunityIcons name="compass-outline" size={24} color={color} />
            
            }}/>
        <Tabs.Screen name='Profile'
        options={{
            tabBarLabel:"Profile",
            tabBarIcon:(color)=><MaterialCommunityIcons name="account-circle-outline" size={24} color={color} />
            
            }}/>
      </Tabs>

  )
}