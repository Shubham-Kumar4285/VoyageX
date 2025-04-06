import { View, Text } from "react-native";
import Login from './../components/Login';
import { auth } from './../configs/FirebaseConfig';
import { Redirect } from "expo-router";
import React, { useEffect, useState } from "react";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true); // State to handle loading
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setIsLoading(false); // Stop loading once user state is updated
    });

    return () => unsubscribe(); // Cleanup the subscription
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {user ? <Redirect href={'/MyTrip'} /> : <Login />}
    </View>
  );
}