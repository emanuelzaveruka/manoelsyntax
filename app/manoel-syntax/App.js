import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar,TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './src/components/TaskList/index';
// You can import from local files 
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
export default function App() { //criação de componente
const [task, setTask] = useState([
  {key: 1, task: 'teste'},
  {key: 2, task: 'teste'},
  {key: 3, task: 'teste'},
  {key: 4, task: 'teste'},
]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#E5E5E5" barStyle="dark-content" />
      
      <View style={styles.content}>
        <Text style={styles.top}> 
          Manoel Syntax 
        </Text>
      </View> 
      {/*.fab é a estilização de imagem e algumas funções
          Iosicons é a chama da biblioteca de imagens
            e que em seguidade eu defino o tamanho e a cor
          em seguida fecho a tag do botão responsável pelo efeito
          de "toque de botão"
        */
      }
      <TouchableOpacity style={styles.fab}> 
        <Ionicons name="ios-add" size={50} color="#FFF"/>
      </TouchableOpacity>

      <FlatList /* Criação da lista */
      marginHorizontal={10} /*Uma definição de margem dentro do flatlist*/
      showsHorizontalScrollIndicator={false} /*Serve para esconder a barra de rolagem*/
      data={task} /*definindo o que a data deve renderizar*/
      keyExtractor={(item) => String(item.key) }
       /*basicamente é o extrator de chaves do item.key ele aloca o espaço e organiza apartir de chaves*/
      renderItem={ ({item}) => <TaskList data={item}/> } 
      /*renderItem renderiza ou seja manda o que deve ser impresso tela apartir da nossa função
      que foi exportada da src */ 
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
    color: '#FFFFFF',
    textAlign: "right",
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
    justifyContent: 'center',
    shadowOffset:{
      widht:1,
      height: 3,
    },
  }
})