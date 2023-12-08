import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState('');

  function calcularArea() {
    if (base > 0 && altura > 0) {
      setArea(((parseFloat(base) * parseFloat(altura)) / 2).toFixed(2));
    } else {
      setArea('');
    }
  }

  return (
    <View style={styles.container}>
      <Text  style={styles.textPersonalizado}>Insira os dados abaixo para calcular a área do triângulo.</Text>
      <TextInput
        placeholder='Base'
        style={[styles.input, { marginBottom: 10 }]}
        keyboardType='numeric'
        value={base}
        onChangeText={(text) => setBase(text)}
      />

      <TextInput
        placeholder='Altura'
        style={styles.input}
        keyboardType='numeric'
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />

      <TouchableOpacity onPress={calcularArea} style={styles.button}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.areaText}>
        Área:
        <Text style={{ fontSize: 25, color: '#6B240C' }}> {area}</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEED1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#6B240C',
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: '#FDF7E4',
  },
  button: {
    backgroundColor: '#6B240C',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textPersonalizado:{
    fontSize: 16, 
    fontWeight: 'bold', 
    textAlign: 'center',
    padding: 10,
  },
  areaText:{
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#6B240C',
  }
});
