
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import diseasesData from '../constants/Diseases';  // Import the data from the external file

interface Disease {
  id: string;
  title: string;
  symptoms: string;
  dos: string[];
  donts: string[];
}

const Page4: React.FC = () => {
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const openModal = (disease: Disease) => {
    setSelectedDisease(disease);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedDisease(null);
    setModalVisible(false);
  };

  const filteredDiseases = diseasesData.filter((disease) =>
    disease.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search Bar with Search Icon */}
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchButton}>
          <Image
            source={require('../assets/images/search.png')}  // Path to your search icon
            style={styles.searchIcon}  // Ensure you're using the correct style for the icon
          />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for a disease..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <ScrollView>
        {/* If no disease matches, show a message */}
        {filteredDiseases.length === 0 ? (
          <Text style={styles.noMatchText}>Disease not found</Text>
        ) : (
          filteredDiseases.map((disease) => (
            <TouchableOpacity
              key={disease.id}
              style={styles.card}
              onPress={() => openModal(disease)}
            >
              <Text style={styles.cardTitle}>{disease.title}</Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>

      {/* Modal for Symptoms, Dos, and Don'ts */}
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
              
              {/* Symptoms Section */}
              <Text style={styles.modalSubtitle}>Symptoms:</Text>
              <Text style={styles.modalText}>{selectedDisease.symptoms}</Text>

              {/* Dos Section */}
              <Text style={styles.modalSubtitle}>Dos:</Text>
              {selectedDisease.dos.map((doItem, index) => (
                <Text key={index} style={styles.modalText}>- {doItem}</Text>
              ))}

              {/* Don'ts Section */}
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
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  searchContainer: { 
    flexDirection: 'row',   // Align the icon and text input in a row
    alignItems: 'center',   // Vertically center the content
    backgroundColor: '#fff', // White background for the search bar
    borderRadius: 10,       // Rounded corners
    borderWidth: 1,         // Border for the whole search bar
    borderColor: '#007BFF', // Blue border color
    paddingHorizontal: 10,  // Padding inside the search bar
    height: 50,             // Set height to make it look like a search bar
    marginBottom: 15,
  },
  searchButton: {
    padding: 5,             // Padding around the icon
  },
  searchIcon: {
    width: 30,              // Icon width
    height: 30,             // Icon height
    // tintColor: '#007BFF',   // Icon color (optional, you can remove this if you have a colored icon)
  },
  searchBar: {
    flex: 1,                // Let the text input take up remaining space
    paddingLeft: 10,        // Space between icon and text input
    fontSize: 16,           // Adjust font size for input
  },
  card: {
    backgroundColor: '#007BFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    color: '#fff',
  },
  noMatchText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FF0000',
    marginTop: 20,
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

export default Page4;
