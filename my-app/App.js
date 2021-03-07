import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import {CheckBox} from 'react-native-elements'


export default function App() {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <View style = {styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          />
        <Text style = {styles.label}>Monday</Text>
        <StatusBar style="auto" />
      </View>
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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  
});
