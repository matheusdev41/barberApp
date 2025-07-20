import { Ionicons } from '@expo/vector-icons';
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function PasswordInput({ value, onChangeText }) {    
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWrapper}>
                <TextInput 
                    placeholder="Enter your password"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={!mostrarSenha}
                    style={styles.input}
                />
                <TouchableOpacity 
                    onPress={ () => setMostrarSenha(!mostrarSenha)}
                    style={styles.iconContainer}
                >
                    <Ionicons 
                        name={mostrarSenha ? "eye-off" : "eye"}
                        size={20}
                        color="gray"
                    />
                </TouchableOpacity>
            </View>
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
        borderColor: '#ccc',
        paddingRight: 8,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        top: '40%',
        transform: [{ translateY: -10 }] // Centraliza verticalmente 
    },
    inputWrapper: {
        position: 'relative',
        width: '100%'
    },  
    container: {
        flexDirection: 'row',
        borderWidth: '#ccc',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    }
})