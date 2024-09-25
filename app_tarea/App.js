import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableHighlight, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function App() {
  const [tarea, setTarea] = useState('');
  const [listaTareas, setListaTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() === '') return;
    const tareaNueva = {
      id: uuid.v4(),
      nuevaTarea: tarea,
      completada: false,
    };
    setListaTareas([...listaTareas, tareaNueva]);
    setTarea('');
  };

  const eliminarTarea = (id) => {
    setListaTareas(listaTareas.filter(t => t.id !== id));
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Aplicación de Tareas</Text>

      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa una tarea"
          value={tarea}
          onChangeText={(text) => setTarea(text)}
        />
        <Button title="Add Tarea" color="purple" onPress={agregarTarea} />
      </View>

      <FlatList
        data={listaTareas}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.tarea,
              { backgroundColor: index % 2 === 0 ? '#b3ffcc' : '#ffccff' },
            ]}
          >
            <Text>{item.nuevaTarea}</Text>
            <TouchableHighlight onPress={() => eliminarTarea(item.id)}>
              <AntDesign name="close" size={30} color="black" />
            </TouchableHighlight>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  formulario: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
  },
  tarea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#b3ffcc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
