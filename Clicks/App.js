import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Contador from './components/Contador';
import Botones from './components/Botones';
import Logo from './components/Logo';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const reiniciar = () => setContador(0);

  return (
    <View style={styles.contenedorPrincipal}>
      <Logo />
      <View style={styles.contenedorContador}>
        <Contador valor={contador} />
        <Botones incrementar={incrementar} decrementar={decrementar} reiniciar={reiniciar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
  },
  contenedorContador: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
