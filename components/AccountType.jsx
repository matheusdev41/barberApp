import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";

export default function AccountType() {
    const[checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
                <Checkbox 
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(!checked)}
                    color="#007bff"
                />
                <Text>cliente</Text>
                <Checkbox 
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(!checked)}
                    color="#007bff"
                />
                <Text>Barber</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 20,
    },
    label: {
        marginBotton: 5,
        fontWeight: 'bold',
    }
})