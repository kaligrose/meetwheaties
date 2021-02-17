//Chloe Veth

import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";



const App = () => {
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);



    return (
        <View style={styles.container}>

            <Text style={styles.bigBlue}>Welcome to Survey Question #1!</Text>
            <Text style={styles.blue}>Brought to you by Chloe Veth.</Text>
            <Text style={[styles.bigBlue, styles.orange]}>Which cereals do you like?</Text>


            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={[styles.label, styles.red]}>Cheerios</Text>


                <CheckBox
                    value={isSelected2}
                    onValueChange={setSelection2}
                    style={styles.checkbox}
                />
                <Text style={[styles.label, styles.pink]}>Lucky Charms</Text>

                <CheckBox
                    value={isSelected3}
                    onValueChange={setSelection3}
                    style={styles.checkbox}
                />
                <Text style={[styles.label, styles.green]}>Frosted Flakes</Text>

                <CheckBox
                    value={isSelected4}
                    onValueChange={setSelection4}
                    style={styles.checkbox}
                />
                <Text style={[styles.label, styles.purple]}>Wheaties</Text>

            </View>
            <Text style={[styles.label, styles.red]}>{isSelected ? "A classic!" : ""}</Text>
            <Text style={[styles.label, styles.pink]}>{isSelected2 ? "Feeling lucky today?" : ""}</Text>
            <Text style={[styles.label, styles.green]}>{isSelected3 ? "What do snowmen eat for breakfast?...Frosted Flakes!" : ""}</Text>
            <Text style={[styles.label, styles.purple]}>{isSelected4 ? "Great answer, wheatie!" : ""}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    blue: {
        color: 'blue',
    },
    orange: {
        color: 'orange',
    },
    red: {
        color: 'red',
    },
    pink: {
        color: 'pink',
    },
    green: {
        color: 'green',
    },
    purple: {
        color: 'purple',
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
});


export default App;