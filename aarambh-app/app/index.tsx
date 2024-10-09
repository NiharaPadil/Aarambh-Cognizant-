import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('./Page2'); // Navigate to the next page
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [router]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/logo.png')} // Adjust the path as necessary
        style={styles.image}
      />
      <Text style={styles.text}>Aarambh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F0FF', // Light blue background similar to your image
  },
  image: {
    width: 350,  // Adjust the width to fit your needs
    height: 350, // Adjust the height as per the design
    resizeMode: 'contain',
  },
  text: {
    marginTop: 20,
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000', // Black color for the text
  }
});

export default SplashScreen;
