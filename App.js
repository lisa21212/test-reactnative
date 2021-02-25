import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import MyFridge from './Screen/MyFridge';
import FoodInfo from './Screen/FoodInfo';
import MenuInfo from './Screen/MenuInfo';
import Menu from './Screen/Menu';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="MyFridge" tabBarOptions={{ activeTintColor: '#ff9933' }}>
        <Tab.Screen name="MyFridge"
          component={MyFridge}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="fridge" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Menu"
          component={Menu}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="receipt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Notification"
          component={FoodInfo}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Setting"
          component={MenuInfo}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HOME</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


