import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, } from 'react-native';
import { Button, Avatar } from '@rneui/themed';


export default function About({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>About Page</Text>
            <StatusBar style="auto" />
            <Button title="Go Back" type="outline" onPress={() => navigation.goBack()} />

            <Avatar
                size={50}
                rounded
                title="YUnO"
                containerStyle={{ backgroundColor: "blue" }}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
