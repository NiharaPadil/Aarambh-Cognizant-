import { Image, StyleSheet, Platform, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <Text style={styles.hi}>Hi Lima Adithi , from this page we have to start </Text>
  );
}

const styles = StyleSheet.create({
 hi :{
    color: 'red' 
 }
});
