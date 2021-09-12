import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './src/components/TaskList/index';
import * as Animatable from 'react-native-animatable';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
export default function App() {
  //criação de componente

  const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

  const [task, setTask] = useState([
    { key: 1, task: 'teste' },
    { key: 2, task: 'teste' },
    { key: 3, task: 'teste' },
    { key: 4, task: 'teste' },
  ]);
  
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#E5E5E5" barStyle="dark-content" />
      <View style={styles.modalHeader}>
        <TouchableOpacity onPress={() => setOpen(false)}>
          <Ionicons name="md-arrow-back" size={60} color="#fff" />
        </TouchableOpacity>
      </View>

      {/*.fab é a estilização de imagem e algumas funções
          Iosicons é a chama da biblioteca de imagens
            e que em seguidade eu defino o tamanho e a cor
          em seguida fecho a tag do botão responsável pelo efeito
          de "toque de botão"
        */}

      {/* a tag modal e a criação de um outra tela que se dá no inicio do toque do btn
       */}
      <SafeAreaView style={styles.container}>
        <FlatList /* Criação da lista */
          marginHorizontal={10} /*Uma definição de margem dentro do flatlist*/
          showsHorizontalScrollIndicator={
            false
          } /*Serve para esconder a barra de rolagem*/
          data={task} /*definindo o que a data deve renderizar*/
          keyExtractor={(item) => String(item.key)}
          /*basicamente é o extrator de chaves do item.key ele aloca o espaço e organiza apartir de chaves*/
          renderItem={({ item }) => <TaskList data={item} />}
          /*renderItem renderiza ou seja manda o que deve ser impresso tela apartir da nossa função
      que foi exportada da src */
        />
      </SafeAreaView>
      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor="#E5E5E5" barStyle="dark-content" />
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setOpen(false)}>
              <Ionicons name="md-arrow-back" size={60} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TextInput placeholder="De sua opnião" style={styles.input} />
            <TouchableOpacity stle={styles.handleAdd}>
              <Text style={styles.handleAddText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>

      <AnimatedBtn
        style={styles.fab}
        useNativeDriver
        animation="bounceInUp"
        duration={1500}
        onPress={() => setOpen(true)}>
        <Ionicons name="ios-add" size={50} color="#FFF" />
      </AnimatedBtn>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    borderWidth: 3,
  },
  fab: {
    /**Estilo do botão */
    position: 'absolute',
    widht: 60,
    backgroundColor: '#000000',
    borderRadius: 50,
    right: 40,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: '0.2',
    justifyContent: 'center',
    shadowOffset: {
      widht: 1,
      height: 3,
    },
  },
  modalHeader: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#266AE7',
    borderWidth: 3,
  },
  arrow: {
    backgroundColor: '#266AE7',
    borderRadius: 50,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    borderBottomColor: '#000',
    backgroundColor: '#F5F5F5',
    padding: 9,
    borderColor: '#27235F',
    height: 85,
    textAlignVertical: 'top',
    color: '#000',
    borderWidth: 3,
  },
  handleAddText: {
    marginTop: 30,
    widht: 30,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    textAlign: 'center',
    borderColor: '#27235F',
    borderRadius: 30,
    borderWidth: 3,
  },
});
