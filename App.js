import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import blankProfile from './assets/blankProfile.png';
import * as ImagePicker from 'expo-image-picker';
import Inputs from './inputs.js';

export default function App() {
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
    }
  return (
      <View style={styles.container}>
           
        
          <Text style={{ color: 'orange', fontSize: 40 }}>
              Profile
          </Text>
          <Image source={blankProfile} style={{ width: 200, height: 200 }} />
          <TouchableOpacity
              onPress={openImagePickerAsync}
              style={{ backgroundColor: 'blue' }}>
              <Text style={{ fontSize: 20, color: '#fff' }}>Edit Photo</Text>
          </TouchableOpacity>

          <Inputs />


      <StatusBar style="auto" />
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
});

