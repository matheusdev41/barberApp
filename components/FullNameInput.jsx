import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

export default function FullNameInput() {
    return (
        <>
            <Text style={styles.label}>Full Name</Text>
            <TextInput 
                placeholder="Enter your full name"
                style={styles.input}
            />
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        marginBottom: 5,
        fontWeight:'bold',
    },
    input: {
        borderWidth: 1,
        borderColor:'#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    }
})