import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
    state = {
        Name: '',
        Email: '',
        Year: '',
        Major: ''
    }
    handleName = (text) => {
        this.setState({ Name: text })
    }
    handleEmail = (text) => {
        this.setState({ Email: text })
    }
    handleYear = (text) => {
        this.setState({ Year: text })
    }
    handleMajor = (text) => {
        this.setState({ Major: text })
    }
    submit = (Name, Email, Year, Major) => {
        alert('Name: ' + Name + ' Email: ' + Email + ' Year: ' + Year + ' Major: ' + Major)
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Name"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleName} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Year"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleYear} />
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Major"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleMajor} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.submit(this.state.Name, this.state.Email, this.state.Year, this.state.Major)
                    }>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 20,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})
