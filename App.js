import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Drink from './components/drink';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Drink name="Öl" />
      <Drink name="Cider" />
      <Drink name="Alkoholfri öl" />
      <Drink name="Alkoholfri cider" />
      <Drink name="Läsk" /> 

    </View>
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
