import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import diseasesData from '../constants/Diseases.js'; // Import diseases data

const Page2 = () => {
  const [inputText, setInputText] = useState(''); // State for input text
  const [selectedDisease, setSelectedDisease] = useState(null); // State for selected disease
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  const handleSubmit = async () => {
    const symptomsArray = inputText.split(',').map(symptom => symptom.trim().toLowerCase()).join(' ');

    try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ symptoms: symptomsArray }),
});

        const data = await response.json();

        if (data.disease) {
            setSelectedDisease({ title: data.disease, dos: [], donts: [] }); // Adjust based on your needs
            setModalVisible(true);
        } else {
            alert('Disease not found.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching the disease prediction.');
    }
};


  const closeModal = () => {
    setModalVisible(false); // Close modal
    setInputText(''); // Clear input text
    setSelectedDisease(null); // Clear selected disease
  };

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
          placeholder="Enter symptoms (comma-separated)" // Placeholder text
          value={inputText} // Set the value from state
          onChangeText={setInputText} // Update state on text change
        />
        <TouchableOpacity style={styles.micButton}>
          <Image
            source={require('../assets/images/microphone.png')} // Adjust the path to your microphone icon
            style={styles.micIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.exploreButton} onPress={() => router.push('./Page4')}>
        <Text style={styles.exploretext}>Explore</Text>
      </TouchableOpacity>

      {/* Modal for displaying disease information */}
      {selectedDisease && (
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedDisease.title}</Text>
              <Text style={styles.modalSubtitle}>Dos:</Text>
              {selectedDisease.dos.map((doItem, index) => (
                <Text key={index} style={styles.modalText}>- {doItem}</Text>
              ))}
              <Text style={styles.modalSubtitle}>Don'ts:</Text>
              {selectedDisease.donts.map((dontItem, index) => (
                <Text key={index} style={styles.modalText}>- {dontItem}</Text>
              ))}
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F0FF',
    padding: 20,
    marginBottom: -100,
  },
  image: {
    width: 250,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: -150,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
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
    width: 24,
    height: 24,
    bottom: -15,
    marginRight: -10,
  },
  submitButton: {
    backgroundColor: '#007BFF',
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
    color: '#fff',
    fontSize: 18,
  },
  exploretext: {
    color: '#007BFF',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '70%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalSubtitle: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 16,
    marginVertical: 2,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Page2;