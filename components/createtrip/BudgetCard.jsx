import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function BudgetCard({option,selectedBudget}) {
  return (
    <View style={[{
            padding:15,
            marginTop:15,
            backgroundColor:Colors.WHITE,
            borderRadius:15,
            borderWidth: selectedBudget.title=== option.title? 2 : 0
            
        }]}>
            <View>
                    <Text style={{
                    fontFamily:'outfit-bold',
                    fontSize:20
                }}>{option.icon} {option.title}</Text>
                <Text style={{
                    fontFamily:'outfit',
                    fontSize:15,
                    color:Colors.textlight
                }}>{option.desc}</Text>
    
            </View>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:10
            }}>Amount : {option.priceRange}</Text>
            
          
        </View>
  )
}