import RememberMeCheckBox from '@/components/Checkbox';
import EmailInput from '@/components/EmailInput';
import PasswordInput from '@/components/PasswordInput';
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function Login() {
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState(''); 
    const[mostrarSenha, setMostrarSenha] =useState(false);
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
            
            <EmailInput value={email} onChangeText={setEmail} />
            <PasswordInput value={senha} onChangeText={setSenha} />
            
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


