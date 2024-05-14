import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './style'

export default function SobreMim({ navigation }) {
  return (
    <View style={styles.container}>
      <img src={"https://media.istockphoto.com/id/1157140670/pt/vetorial/emoticon-cute-line-art-and-flat-color.jpg?s=612x612&w=0&k=20&c=JT-p70X7U8xsLq-m3MJlN6nRM-Tm5miaC7bo7FsnzS4="} alt="Descrição da imagem"/>
      <Text style={styles.titulo}>Nome: Brenda</Text>
      <Text style={styles.titulo}>Telefone: 16 997601509</Text>
      <Text style={styles.titulo}>Email: brendapaulin00@hotmail.com</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
    </View>
  )
} 