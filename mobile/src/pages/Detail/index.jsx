import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';

import  * as MailComposer from 'expo-mail-composer'
import {Linking} from 'react-native'


import { Feather } from '@expo/vector-icons'
import logoIMG from '../../assets/logo.png'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()
  const incident = route.params.incident
  const value = Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)
  const msg = `Olá ${incident.name}, estou entrando em contado pois gostaria de ajudar no caso: "${incident.title}" com o valor ${value}`


  function navigateBack(){
    navigation.goBack()
  }

  function sentMail(){
    MailComposer.composeAsync({
      subject:`Herói do caso: ${incident.title}`,
      recipients:[incident.email],
      body:msg
    })
  }

  function sendWhatsApp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${msg}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoIMG} />


        <TouchableOpacity
          style={styles.detailButton}
          onPress={navigateBack}
        >
          <Feather name="arrow-right" size={16} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty,{marginTop:0}]}>ONG:</Text>
  <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>
        {value}
        </Text>
      </View>

      <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o heroi desse caso:</Text>

          <Text style={styles.heroDescription}>Entre em contato</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
              <Text style={styles.actionText}>Whatsapp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress={sentMail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>

          </View>
      </View>

    </View>
  );
}
