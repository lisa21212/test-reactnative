import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// import icon
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// import 頁面
import MyFridge from './Screen/MyFridge';
import FoodInfo from './Screen/FoodInfo';
import MenuInfo from './Screen/MenuInfo';
import Menu from './Screen/Menu';
import Keep from './Screen/Keep';
import Setting from './Screen/Setting';
import Notification from './Screen/Notification';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const menuStack = createStackNavigator();
const fridgeStack = createStackNavigator();


export default function App() {
  function FridgeScreen(){
    return(
      <fridgeStack.Navigator screenOptions={{headerShown: false}}> 
      <fridgeStack.Screen name="Fridge" component={MyFridge}/>
      <fridgeStack.Screen name="MenuInfo" component={MenuInfo}/>
      <fridgeStack.Screen name="FoodInfo" component={FoodInfo}/>
       </fridgeStack.Navigator>
    )
  }

  
  function MenuScreen() {
    return (
      <menuStack.Navigator screenOptions={{headerShown: false}}>
        <menuStack.Screen name="Menu" component={Menu}/>
        <menuStack.Screen name="Keep" component={Keep}/>
      </menuStack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Notification" tabBarOptions={{ activeTintColor: '#ff9933' }}>
        <Tab.Screen name="MyFridge"
          component={FridgeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="fridge" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Menu"
          component={MenuScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="receipt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Setting"
          component={Setting}
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


