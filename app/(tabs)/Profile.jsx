import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { auth } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'; // For sign-out icon

export default function Profile() {
  const user = auth.currentUser;
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay to mimic real-world app behavior
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const logOut = async () => {
    try {
      await auth.signOut();
      console.log('User logged out successfully');
      router.replace('/'); // Redirect after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        {/* Profile Picture */}
        <Image
          source={user?.photoURL ? { uri: user.photoURL } : require('./../../assets/images/profile.png')}
          style={styles.profileImage}
        />
        
        {/* User Info */}
        <Text style={styles.userName}>{user?.displayName || 'Guest User'}</Text>
        <Text style={styles.userEmail}>{user?.email || 'No email available'}</Text>

        {/* Sign Out Button */}
        <TouchableOpacity style={styles.button} onPress={logOut}>
          <MaterialIcons name="exit-to-app" size={24} color={Colors.WHITE} />
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_GRADIENT,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileCard: {
    backgroundColor: Colors.WHITE,
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
    width: '85%',
    maxWidth: 400,
    minHeight: 300,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.PRIMARY,
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: Colors.GRAY,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.WHITE,
    marginLeft: 10,
  },
});
