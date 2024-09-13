import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Contador = ({ valor }) => {
  return <Text style={styles.contador}>{valor}</Text>;
};

const styles = StyleSheet.create({
  contador: {
    fontSize: 80,
    color: '#fff',
    margin: 20,
  },
});

export default Contador;
