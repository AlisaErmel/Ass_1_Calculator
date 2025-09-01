import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
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
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <View>
            <Text style={styles.flatListItem}>{item.first} {item.op} {item.second} = {item.result}</Text>
          </View>
        }
        ListHeaderComponent={
          <Text style={styles.flatListHeading}>History:</Text>
        }
      />
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
  },

  flatListHeading: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },

  flatListItem: {
    fontSize: 15,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 5,
    margin: 5
  }
});
