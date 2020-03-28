import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons'

import api from '../../services/api'
import styles from "./styles";
import logoIMG from '../../assets/logo.png'



export default function Incidents() {
  const navigation = useNavigation()
  const [incidents, setIncidents] = useState([])
  const [totalIncidents, setTotalIncidents] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  function navigateToDetail(incident) {
    navigation.navigate('Detail', {incident})
  }

  async function loadIncidents(){
    if (loading){
      return
    }

    if(totalIncidents>0 && incidents.length === totalIncidents){
      return
    }

    setLoading(true)


    const resp = await api.get('incidents',{
      params:{page}
    })
    setIncidents([...incidents, ...resp.data])
    setTotalIncidents(resp.headers['x-total-count'])

    setPage(page+1)
    setLoading(false)
  }



  useEffect(()=> {
      loadIncidents()
    }
  ,[])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoIMG} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}> {totalIncidents} Casos</Text>
        </Text>
      </View>

      <View>
        <Text style={styles.title}>
          Bem vindo
        </Text>
        <Text style={styles.description}>
          Escolha um dos casos abaixo e salve o dia
      </Text>

      </View>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({item: incident}) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>{incident.title}:</Text>
            <Text style={styles.incidentValue}>{incident.description}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}
              </Text>

            <TouchableOpacity
              style={styles.detailButton}
              onPress={()=>navigateToDetail(incident)}
            >
              <Text style={styles.detailButtonText}>Ver Mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />


    </View>
  );
}


