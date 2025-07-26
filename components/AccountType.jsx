import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";

export default function AccountType() {
    const[checkedCliente, setCheckedCliente] = useState(false);
    const[checkedBarbeiro, setCheckedBarbeiro] = useState(false);
    return (
        <View style={styles.container}>
                <Checkbox 
                    status={checkedCliente ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedCliente(!checkedCliente)}
                    color="#007bff"
                />
                <Text>Cliente</Text>
                <Checkbox 
                    status={checkedBarbeiro ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedBarbeiro(!checkedBarbeiro)}
                    color="#007bff"
                />
                <Text>Barbeiro</Text>

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
});