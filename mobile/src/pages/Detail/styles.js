import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",

  },
  incident: {
    marginTop: 48,
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24,
  },
  incidentValue: {
    fontSize: 15,
    marginTop: 8,
    color: '#737380'
  },
  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
  },
  heroTitle: {
    color: '#13131a',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30

  },
  heroDescription: {
    color: '#737380',
    fontSize: 15,
    marginTop: 16

  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',


  },
  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: "center",
    alignItems: "center",
    
  },
  actionText:{
    color:'#FFF',
  }




});

export default styles