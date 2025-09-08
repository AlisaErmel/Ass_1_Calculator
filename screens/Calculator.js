import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Calculator({ navigation }) {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [result, setResult] = useState(null);

    const [data, setData] = useState([]);

    const handlePressPlus = () => {
        const res = Number(first) + Number(second);
        setResult(res);

        const newItem = {
            id: Date.now().toString(),
            first,
            second,
            result: res,
            op: '+'
        };

        setData([...data, newItem]);
        setFirst("");
        setSecond("");
    };

    const handlePressMinus = () => {
        const res = Number(first) - Number(second);
        setResult(res);

        const newItem = {
            id: Date.now().toString(),
            first,
            second,
            result: res,
            op: '-'
        };

        setData([...data, newItem]);
        setFirst("");
        setSecond("");
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.textStyle}>Result: {result}</Text>
                <StatusBar style="auto" />
                <View>
                    <TextInput
                        value={first}
                        style={styles.textInputStyle}
                        onChangeText={text => setFirst(text)}
                        placeholder="Type the number"
                        keyboardType='numeric'
                    />
                    <TextInput
                        value={second}
                        style={styles.textInputStyle}
                        onChangeText={text => setSecond(text)}
                        placeholder="Type the number"
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.buttonStyle}>
                    <Button title="+" onPress={handlePressPlus} />
                    <Button title="-" onPress={handlePressMinus} />
                </View>
                <View>
                    <Button
                        onPress={() => navigation.navigate('History', { data })}
                        title="History" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    textStyle: {
        fontSize: 20,
        marginTop: 300
    },

    textInputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 3,
        padding: 3,
        width: 200
    },

    buttonStyle: {
        flexDirection: 'row',
        color: 'blue'
    }
});