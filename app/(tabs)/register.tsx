import AccountType from "@/components/AccountType";
import CnpjInput from "@/components/CnpjInput";
import EmailInput from "@/components/EmailInput";
import FullNameInput from "@/components/FullNameInput";
import PasswordConfirm from "@/components/PasswordConfirm";
import PasswordInput from "@/components/PasswordInput";
import { Ionicons } from "@expo/vector-icons";

import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from "react-native-safe-area-context";



export default function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    function criarConta() {
        // Aqui entra lógica real de criação de conta (API)

        setNome('');
        setEmail('');
        setCnpj('');
        setPassword('');
        setConfirmPassword('');
        setMessage('Conta criada com sucesso');

        setTimeout(() => setMessage(''), 5000);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}    
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAwareScrollView
                        contentContainerStyle={styles.container}
                        enableOnAndroid={true}
                        extraScrollHeight={20}
                        keyboardShouldPersistTaps="handled"
                    >
                    
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Criar Conta</Text>
                    </View>

                    <FullNameInput value={nome} onChangeText={setNome}/>
                    <EmailInput value={email} onChangeText={setEmail} />

                    <Text style={styles.label}>Tipo de conta</Text>
                    <AccountType />
                    <CnpjInput value={cnpj} onChangeText={setCnpj} />
                    <PasswordInput value={password} onChangeText={setPassword} />
                    <PasswordConfirm value={confirmPassword} onChangeText={setConfirmPassword}/>

                    <Button 
                            title="Criar Conta"
                            color="#ffb300"
                            onPress={criarConta}
                    />
                    {message !== '' && <Text style={styles.message}>{message}</Text>}
                    <View style={styles.row}>
                        <Text>Já possui uma conta?</Text>
                            <Link href="/register" asChild>
                                 <Text style={styles.textRegister}>Faça o login</Text>
                            </Link>
                    </View>

                    </KeyboardAwareScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>  
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
    },
    message: {
        marginTop: 20,
        color: 'green',
        fontSize: 16,
        textAlign: 'center',
    },
    textRegister: {
        color:'#212529',
        fontWeight:'bold',
        marginLeft: 2,
    },
    row: {
        textAlign: 'center',
        flexDirection:'row',
        justifyContent:'center',
        margin: 25,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    }
});