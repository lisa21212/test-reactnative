import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function MenuInfo({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MenuInfo page</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    );
  }

  export default MenuInfo;