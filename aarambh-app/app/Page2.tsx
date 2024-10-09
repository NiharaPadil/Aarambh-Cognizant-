import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Page2 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')} // Adjust the path as necessary
        style={styles.image}
      />
      <Text style={styles.title}>Aarambh</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Text"
        />
        <TouchableOpacity style={styles.micButton} onPress={() => alert('Microphone pressed!')}>
          <Image
            source={require('../assets/images/microphone.png')} // Adjust the path to your microphone icon
            style={styles.micIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.exploreButton}>
        <Text style={styles.exploretext}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F0FF', // Light blue background
    padding: 20,
    marginBottom: -100,
  },
  image: {
    width: 250,  // Adjust the width to fit your needs
    height: 220, // Adjust the height as per the design
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: -150,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000', // Black color for the text
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 30,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 28,
    color: 'gray', 
    paddingHorizontal: 20,
  },
  micButton: {
    position: 'absolute',
    bottom: 45,
    right: 20,
    padding: 10,
    marginRight: 10,
  },
micIcon: {
  width: 24,  // Adjust the width of the icon
  height: 24, // Adjust the height of the icon
  bottom: -15,
  marginRight: -10,
},
  submitButton: {
    backgroundColor: '#007BFF', // Button color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 80,
    marginBottom: 60,
    marginTop: 10,
  },
  exploreButton: {
    backgroundColor: 'transparent',
    borderColor: '#007BFF',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff', // White text for the submit button
    fontSize: 18,
  },
  exploretext: {
    color: '#007BFF', // Blue text for the explore button
    fontSize: 18,

  },
  micText: {
    fontSize: 30,
  },
});

export default Page2;
