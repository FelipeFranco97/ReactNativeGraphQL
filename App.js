import { ApolloProvider } from "@apollo/client";
import client from "./client";
import { SafeAreaView, StyleSheet } from "react-native";
import Drivers from "./query"; 

function App() {
  return (
    <SafeAreaView style={styles.container} >
        <ApolloProvider client={client}>
            <Drivers />
        </ApolloProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});

export default App;