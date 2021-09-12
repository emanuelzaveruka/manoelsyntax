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
import ComponentsTwo from './src/components/component2/component2';
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
      <View style={styles.topodapagina}>
        <TouchableOpacity onPress={() => setOpen(false)} style={styles.arrow}>
          <Ionicons name="md-arrow-back" size={50} color="#266AE7" />
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
          renderItem={({ item }) => <ComponentsTwo data={item} />}
          /*renderItem renderiza ou seja manda o que deve ser impresso tela apartir da nossa função
      que foi exportada da src */
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  topodapagina: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#266AE7',
  },
  arrow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    marginLeft: 10,
  },
});
