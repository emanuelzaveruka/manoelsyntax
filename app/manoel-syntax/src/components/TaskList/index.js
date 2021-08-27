import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
  
export default function TaskList({ data }){
  return(
    <Animatable.View 
    style={styles.container}
    animation="bounceIn"
    useNativeDriver
    >

        <View>
          <Text style={styles.task}>
            {data.task}
          </Text>
        </View>
    </Animatable.View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 7,
    elevation: 1.5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset:{
      widht: 1,
      height: 3,
    }
  },
  task:{
    color: '#121212',
    fontSize: 30,
    marginTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
  }
})