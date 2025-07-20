import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
    const router = useRouter();

    function logout() {
        router.replace('/login');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem vindo a Home!</Text>
            <Button title="Sair" onPress={logout} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
});