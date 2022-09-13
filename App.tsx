import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';


export default function App() {
    console.log('dude')
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text style={styles.header}>This is seriously awesome!</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 50,
        textAlign: 'center'
    }
});
