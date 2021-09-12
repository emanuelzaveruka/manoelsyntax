import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Home from './telas/home/home';
import TelaDois from './telas/teladois/teladois';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#266AE7',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Home" component={Home} options={{ title: '' }} />
        <Stack.Screen
          name="Profile"
          component={TelaDois}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
