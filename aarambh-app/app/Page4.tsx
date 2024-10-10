import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import diseasesData from '../constants/Diseases';  // Import the data from the external file

interface Disease {
  id: string;
  title: string;
  dos: string[];
  donts: string[];
}

const Page4: React.FC = () => {
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (disease: Disease) => {
    setSelectedDisease(disease);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedDisease(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {diseasesData.map((disease) => (
          <TouchableOpacity
            key={disease.id}
            style={styles.card}
            onPress={() => openModal(disease)}
          >
            <Text style={styles.cardTitle}>{disease.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal for Dos and Don'ts */}
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
    padding: 20,
    backgroundColor: '#F5F5F5',
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
