import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Botones = ({ incrementar, decrementar, reiniciar }) => {
  return (
    <View style={styles.botones}>
      <Button title="Clic" onPress={incrementar} color="#3a86ff" />
      <Button title="Disminuir" onPress={decrementar} color="#ef233c" />
      <Button title="Reiniciar" onPress={reiniciar} color="#2ec4b6" />
    </View>
  );
};

const styles = StyleSheet.create({
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default Botones;
