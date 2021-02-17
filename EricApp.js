import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Inputs from './inputs.js'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default function App() {

  return (
		<Inputs />
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	input: {
      	margin: 15,
      	height: 40,
      	borderColor: '#7a42f4',
      	borderWidth: 1
	},
});

}
