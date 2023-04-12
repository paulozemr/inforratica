import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Comentem seus buubo</Text>
      {/* Comentem , as coisas que voces fazem , e expliquem os commits  */}
      {/* Estou adicionando coisas por Yarn no windows , é bem mais facil de fazer assim pq é mais pratico de digitar  */}
      <StatusBar style="auto" />
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
