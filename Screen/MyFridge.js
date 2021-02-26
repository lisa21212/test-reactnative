import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();


function MyFridge({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyFridge page</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    );
  }

  export default MyFridge;