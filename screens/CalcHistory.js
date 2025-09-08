import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, FlatList, View, Text } from "react-native";

export default function CalcHistory({ route }) {
    const { data } = route.params;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
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

    flatListHeading: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
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