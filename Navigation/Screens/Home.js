import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
      <Text>Home Screen</Text>
      <Button title="GO DETAILS" onPress={() => navigation.navigate('DetailHome')} />
    </View>
  );
}
