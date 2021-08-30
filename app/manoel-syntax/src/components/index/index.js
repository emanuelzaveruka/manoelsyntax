import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function Index({ data }) {
  return (
    <Animatable.View
      style={styles.container}
      animation="bounceIn"
      useNativeDriver>
      <View>
        <Text style={styles.task}>{data.task}</Text>
      </View>
    </Animatable.View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 8,
    flexDirection: 'row',
    backgroundColor: '#C6D1E8',
    borderRadius: 5,
    padding: 7,
    elevation: 1.5,
  },
  task:{
    flexDirection: 'center',
    color: '#27235F',
    fontSize: 30,
  }
})