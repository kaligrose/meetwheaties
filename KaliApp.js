//Kali Grose
//Testing push
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 310, height: 200 }} /> 

      <Text style={{color: '#888', fontSize: 30}}> 
        Welcome to 
        <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 30, fontFamily: 'comic-sans'}}> Meet</Text>
        <Text style={{color: 'orange', fontWeight: 'bold', fontSize: 30, fontFamily: 'comic-sans'}}>Wheaties! </Text>
      </Text>

      

      

      <TouchableOpacity
        onPress={() => alert('Loading survey questions...')}
        style={styles.button}>
        <Text style={styles.buttonText}>Take Survey</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('Loading matches...')}
        style={styles.button}>
        <Text style={styles.buttonText}>View Matches</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('Loading match history...')}
        style={styles.button}>
        <Text style={styles.buttonText}>Match History</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('Loading account info...')}
        style={styles.button}>
        <Text style={styles.buttonText}>Account Information</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
