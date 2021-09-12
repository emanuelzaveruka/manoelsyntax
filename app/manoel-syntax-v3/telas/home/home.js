import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Lista from '../../components/lista/lista';

export default function Home({ navigation }) {
  const [task, setTask] = useState([
    { key: 1, task: 'HTML' },
    { key: 2, task: 'HTML' },
    { key: 3, task: 'HTML' },
    { key: 4, task: 'HTML' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList /* Criação da lista */
        marginHorizontal={10} /*Uma definição de margem dentro do flatlist*/
        showsHorizontalScrollIndicator={
          false
        } /*Serve para esconder a barra de rolagem*/
        data={task} /*definindo o que a data deve renderizar*/
        keyExtractor={(item) => String(item.key)}
        /*basicamente é o extrator de chaves do item.key ele aloca o espaço e organiza apartir de chaves*/
        renderItem={({ item }) => <Lista data={item} />}
        /*renderItem renderiza ou seja manda o q ue deve ser impresso tela apartir da nossa função
      que foi exportada da src */
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    backgroundColor: '#000',
    flexDirection: 'space-between',
  },
  button: {
    backgroundColor: '#000000',
    marginTop: 10,
    width: '30px',
  },
});
