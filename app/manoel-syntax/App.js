import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar,TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

// You can import from local files 
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

cont [task, setTask] = useState([
  {key: 1, task: 'Comprar Pao'},
  {key: 2, task: 'Comprar Pao'},
  {key: 3, task: 'Comprar Pao'},
  {key: 4, task: 'Comprar Pao'},
]);

export default function App() { //criação de componente
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#E5E5E5" barStyle="dark-content" />
      
      <View style={styles.content}>
        <Text style={styles.top}> 
          Manoel Syntax 
        </Text>
      </View> 

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="ios-add" size={50} color="#FFF"/>
      </TouchableOpacity>

      <FlatList 
      showsHorizontalScrollIndicator={false} /*Serve para esconder a barra de rolagem*/
      data={task}
      keyExtractor={(item) => String(item.key) }
      renderItem={ ({item}) => <taskList data={item}/> } 
      /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor: '#E5E5E5', 
  },
  top:{
    marginTop: 25,
    paddingBottom: 40,
    backgroundColor: '#266AE7', 
    fontSize: 25,
    textAlign: 'center',
    color: '#FFFFFF',
    textAlign: "right"
  },
  /*button:{
    marginTop: 45,
    paddingBottom: 30,
    backgroundColor: '#C6D1E8', 
    fontSize: 25,
    borderRadius:50,
    textAlign: 'center',
    color: '#27235F'
  },Trecho em vistoria *_* */

  fab:{ /**Estilo do botão */
    position: 'absolute',
    widht: 60,
    backgroundColor: '#000000',
    borderRadius: 50,
    right: 40,
    bottom:25,
    elevation: 2,
    zIndex:9,
    shadowColor:'#000',
    shadowOpacity: '0.2',
    shadowOffset:{
      widht:1,
      height: 3,
    },
    justifyContent: 'center'
  }
})