import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import firebase from '../firebaseConfig'

export default function Home({navigation}) {

  const handleLogout = async() => {
    await firebase.auth().signOut().then(() => navigation.navigate('Login')).catch(() => {
      alert('Opps! Não Conseguimos sair do APP!')
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo ao seu App</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.btnText}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 28
  },
  button: {
    paddingHorizontal: 28,
    paddingVertical: 10,
    backgroundColor: 'yellow',
    marginTop: 20,
    borderRadius: 7,
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold'
  }
})