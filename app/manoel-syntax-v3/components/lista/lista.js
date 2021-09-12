import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Lista({data}) {
  return (
    <View style={styles.container}>
    <View>
      <TouchableOpacity>
          <Text style={styles.texto}>
          {data.task}
          </Text>      
      </TouchableOpacity>
    </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
  },
  texto:{
    color: '#ffffff',
    fontSize: 30,
  },
});
