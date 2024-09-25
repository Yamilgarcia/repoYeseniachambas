import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailHome({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
      <Text>DetailHome Screen</Text>
      <Button title="MÁS DETALLES" onPress={() => navigation.navigate('AnotherDetailHome')} />
    </View>
  );
}
