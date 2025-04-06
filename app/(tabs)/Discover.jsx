import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { places } from '../../constants/Options';


export default function Discover() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discover 🧭</Text>
      
      <ScrollView contentContainerStyle={styles.cardsContainer} showsVerticalScrollIndicator={false}>
        {places.map((place, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: place.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{place.name}</Text>
            <Text style={styles.cardDescription}>{place.description}</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.buttonText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        ))}

        <Text style={{
          fontFamily:'outfit-medium'
          ,fontSize:20,
          textAlign:'center',
          paddingBottom:20
        }}>More Coming Soon...</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#F7F7F7',
    paddingRight:20,
    paddingLeft:20,
    paddingTop:30,
        
  },
  header: {
    fontFamily:'outfit-bold',
    fontSize: 30,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
  },
  cardsContainer: {
    paddingBottom: 40,
    width:'100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    padding: 15,
    marginHorizontal: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
    textAlign: 'justify',
  },
  cardButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
