import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'

import firebase from '../firebaseConfig'

export default function Register({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async() => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home')
      }).catch(erro => {
        alert('Opss! Você escreveu algum campo errado!')
      })
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Cadastrar</Text>

      <Text style={styles.label}>Digite um E-mail valido:</Text>
      <TextInput
        style={styles.input}
        placeholder='E-mail'
        onChangeText={value => setEmail(value)}
      />

      <Text style={styles.label}>Digite uma Senha valida:</Text>
      <TextInput
        style={styles.input}
        placeholder='Senha'
        onChangeText={value => setPassword(value)}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Text 
        style={{
          fontSize: 10,
          color: 'yellow',
          marginTop: 30,
        }}
        onPress={() => navigation.navigate('Login')}
      >
        Entrar na minha conta!
      </Text>

      <StatusBar style="light"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  title: {
    marginBottom: 20,
    color: '#fff',
    fontSize: 28
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
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
  }
})