import AccountType from "@/components/AccountType";
import EmailInput from "@/components/EmailInput";
import FullNameInput from "@/components/FullNameInput";
import { StyleSheet, Text, View } from "react-native";



export default function Register() {
    return (
        <View style={styles.container}>
            <FullNameInput/>
            <EmailInput value={undefined} onChangeText={undefined} />
            <Text style={styles.label}>Account Type</Text>
            <AccountType />
        </View>  
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
    }
});