import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from '../assets/images/logo.png'; // Ensure the image file exists at this path

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={logo} // Make sure to provide the correct path to your image
        style={styles.image}
      />
      <Text style={styles.text}>Aarambh</Text>
    </View>
  );
}

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