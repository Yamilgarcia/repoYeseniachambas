import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.contenedorLogo}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorLogo: {
    height: 80, // Ajusta la altura según sea necesario
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3a86ff', // Fondo azul
    width: '100%',
  },
  logo: {
    width: 300, // Ajusta el tamaño del logo según sea necesario
    height: 50,
    resizeMode: 'contain',
  },
});

export default Logo;
