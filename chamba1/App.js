import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Gatito from './componentes/Gatito';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>Galería gatitos</Text>
      <ScrollView>
        <Gatito nombre="Gatitos naranja" imagen={require('./imagenes/1.jpg')} />
        <Gatito nombre="Gatito blanco" imagen={require('./imagenes/2.jpg')} />
        <Gatito nombre="Gatito Gris" imagen={require('./imagenes/3.png')} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
