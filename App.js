import 'react-native-gesture-handler';
import React, { useState,useEffect } from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import * as FirebaseCore from 'expo-firebase-core';

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
import Board from './Screen/Board';
import Memo from './Screen/Memo';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import Habbit from './Screen/Habbit';
import Preference from './Screen/Preference';
import People from './Screen/People';
import Stores from './Screen/Stores';
import Recipe from './Screen/Recipe';
import AddRecipe from './Screen/AddRecipe';
import AddFood from './Screen/AddFood';
import { loginState } from './Screen/LoginScreen';



const Tab = createBottomTabNavigator();
const LoginStack = createStackNavigator();

const menuStack = createStackNavigator();
const fridgeStack = createStackNavigator();
const settingStack = createStackNavigator();




export default function App(props) {

  const [user, setUser] = useState(null)
  const [userLogged, setUserLogged] = useState(false); // it keep tracks of user login status


  function FridgeScreen() {
    return (
      <fridgeStack.Navigator screenOptions={{ headerShown: false }}>
        <fridgeStack.Screen name="Fridge" component={MyFridge} />
        <fridgeStack.Screen name="Keep" component={Keep} />
        <fridgeStack.Screen name="MenuInfo" component={MenuInfo} />
        <fridgeStack.Screen name="FoodInfo" component={FoodInfo} />
        <fridgeStack.Screen name="Board" component={Board} />
        <fridgeStack.Screen name="Memo" component={Memo} />
      </fridgeStack.Navigator>
    )
  }


  function MenuScreen() {
    return (
      <menuStack.Navigator screenOptions={{ headerShown: false }}>
        <menuStack.Screen name="Menu" component={Menu} />
        <menuStack.Screen name="Keep" component={Keep} />
        <menuStack.Screen name="MenuInfo" component={MenuInfo} />
        <menuStack.Screen name="Stores" component={Stores} />
        <menuStack.Screen name="Recipe" component={Recipe} />
        <menuStack.Screen name="AddRecipe" component={AddRecipe} />
      </menuStack.Navigator>
    )
  }

  function LoginScreenStack() {
    return (
      <LoginStack.Navigator screenOptions={{ headerShown: false }}>
        <LoginStack.Screen name="Login" component={LoginScreen} />
        <LoginStack.Screen name="Register" component={RegisterScreen} />
        <LoginStack.Screen name="Habbit" component={Habbit} />
        <LoginStack.Screen name="Preference" component={Preference} />
        <LoginStack.Screen name="People" component={People} />
      </LoginStack.Navigator>
    )
  }

  function TabStack() {
    return (
      <Tab.Navigator initialRouteName="MyFridge" tabBarOptions={{ activeTintColor: '#ff9933' }}>
        <Tab.Screen name="MyFridge" component={FridgeScreen} options={{tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="fridge" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Menu" component={MenuScreen} options={{
          tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="receipt" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Notification" component={Notification}
          options={{tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen name="Setting"
          component={Preference}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }

  useEffect(() => {
    const authListener = firebase.auth().onAuthStateChanged((user) => {
      setUserLogged(user ? true : false);
     
    });
    return authListener;
  }, []);



console.log(user)
  return (

    <NavigationContainer>
      {
        userLogged ? <TabStack/> : <LoginScreenStack/>
      }
    </NavigationContainer>
  );
}


