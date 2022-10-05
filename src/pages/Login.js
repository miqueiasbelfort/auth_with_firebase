import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import firebase from '../firebaseConfig';

export default function Login({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async() => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then(value => {
        navigation.navigate('Home')
        setEmail('')
        setPassword('')
      }).catch(error => {
        alert('Um dos campos está incorreto!')
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-Vindo ao seu APP!</Text>
      <View style={styles.inputContainer}>
          <Text style={styles.label}>Digite seu E-mail:</Text>
          <TextInput
            placeholder='E-mail'
            style={styles.input}
            onChangeText={(value) => setEmail(value)}
          />
          <Text style={styles.label}>Digite sua Senha:</Text>
          <TextInput
            placeholder='Senha'
            style={styles.input}
            onChangeText={(value) => setPassword(value)}
          />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text 
        style={{
          fontSize: 10,
          color: 'yellow',
          marginTop: 30,
        }}
        onPress={() => navigation.navigate('Register')}
      >
        Ainda não tenho conta!
      </Text>

      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#fff",
    fontSize: 25,
    marginBottom: 15,
  },
  inputContainer: {
    width: 300,
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: "#1c1c1c",
    borderRadius: 7,
  },
  label: {
    color: "#fff",
    fontSize: 17,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    backgroundColor: '#2c2c2c',
    marginBottom: 10,
    borderRadius: 7,
    color: '#fff',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'yellow',
    borderRadius: 5,
    marginTop: -20,
  },
  buttonText: {
    fontSize: 18,
  }
});
