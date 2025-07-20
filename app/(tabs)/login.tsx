import RememberMeCheckBox from '@/components/Checkbox';
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View, } from "react-native";

export default function Login() {
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const router = useRouter()

    function handleLogin() {
        //Simulação de Login Simples 
        if (email === 'admin@webmail.com' && senha == '123') {
            router.replace('/home');
        } else {
            alert('Usuário ou senha inválidos');
        }
    }

    return (
        
        <View style={styles.container}>

            <Image source={require('@/assets/images/barb-logo.png')} style={styles.iconLogin} />
            
            <Text style={styles.title}>Welcome to BarberApp</Text>
            <Text style={styles.slogan}>Sign in to continue</Text>
            
            <Text style={styles.label}>Email</Text>
            <TextInput
                placeholder="Enter your Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput 
                placeholder="Enter tour password"
                value={senha}
                onChangeText={setSenha}
                style={styles.input}
            />
            
            <RememberMeCheckBox />

            <Button 
                title="Entrar" 
                color="#ffb300"
                onPress={handleLogin} 
            />
            <View style={styles.row}>
                <Text>Don't have an account?</Text>
                <Link href="/register" asChild>
                    <Text style={styles.textRegister}>Sign Up</Text>
                </Link>
            </View>
        </View>
    );
};

    const styles = StyleSheet.create({
        container: {
            flex:1,
            justifyContent:'center',
            padding: 20,
            backgroundColor: '#fff',
        },
        title: {
            fontSize: 24,
            marginBottom: 2,
            textAlign: 'center',
        },
        input: {
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            padding: 10,
            marginBottom: 10,
        },
        iconLogin: {
            alignSelf: 'center',
            width: 76,
            height: 76,
            marginBottom: 20, 
        },
        row: {
            textAlign: 'center',
            flexDirection:'row',
            justifyContent:'center',
            margin: 30,
        },
        textRegister: {
            color:'#212529',
            fontWeight:'bold',
            marginLeft: 2,
        },
        label: {
            marginBottom: 5,
            fontWeight:'bold',
        },
        rememberMe: {
            flexDirection: 'row',
        },
        slogan:{
            textAlign: 'center',
            marginBottom: 30,
            color: "#455A63",
            fontSize: 14,
        }

    })


