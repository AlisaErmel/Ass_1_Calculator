import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState(null);

  const handlePressPlus = () => {
    setResult(Number(first) + Number(second));
  }

  const handlePressMinus = () => {
    setResult(Number(first) - Number(second));
  }

  return (
    <View style={styles.container}>
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
    </View>
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
