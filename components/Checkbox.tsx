import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from 'react-native-paper';


export default function RememberMeCheckBox() {
    const[checked, setChecked] = useState(false);
    return (
            <View style={styles.container}>
                <View style={styles.leftSide}>
                    <Checkbox 
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => setChecked(!checked)}
                        color="#007bff"
                    />
                    <Text>Remember-me</Text>
                </View>
            <Link href="/changePass">
                <Text style={styles.forgotPass}>Forgot Password?</Text>
            </Link>
            </View>   
    );
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 20,
    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    forgotPass: {
        
    },
}) 