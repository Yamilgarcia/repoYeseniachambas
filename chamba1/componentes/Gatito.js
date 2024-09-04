import { Image, Text, View, StyleSheet } from 'react-native';

function Gatito(props) {
  return (
    <View>
      <Image style={styles.gato} source={props.imagen} />
      <Text style={styles.titulo}>{props.nombre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  gato: {
    marginTop: 10,
    borderRadius: 8,
    width: 300,
    height: 300,
  },
  titulo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default Gatito;
