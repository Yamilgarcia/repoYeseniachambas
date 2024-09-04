import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Testimonio from './componente/Testimonio';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</Text>
      <ScrollView style={styles.scrollView}>
        <Testimonio
          nombre="Shawn Wang"
          país="Singapur"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          foto={require('./assets/shawn.png')}
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza que necesitaba gracias a la experiencia de codificación gratuita que obtuve de freeCodeCamp. Durante un año después de completar el curso, conseguí un trabajo de ingeniero de software en una empresa con un salario respetable."
        />
        <Testimonio
          nombre="Sarah Chima"
          país="Nigeria"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          foto={require('./assets/sara.png')}
          testimonio="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado y los proyectos desafiantes me ayudaron a convertirme en una mejor desarrolladora."
        />
        <Testimonio
          nombre="Emma Bostian"
          país="Suecia"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          foto={require('./assets/Ema.png')}
          testimonio="Siempre me ha fascinado la música y la tecnología. Gracias a freeCodeCamp, pude combinar mis dos pasiones y ahora trabajo como ingeniera de software en Spotify."
        />
      </ScrollView>
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
  logoContainer: {
    width: '100%',
    backgroundColor: '#0a0a23',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  logo: {
    height: 80,
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  scrollView: {
    width: '100%',
  },
});
