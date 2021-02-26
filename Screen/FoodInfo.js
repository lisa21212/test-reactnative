import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MyFridge from './MyFridge';
import MenuInfo from './MenuInfo';
import Menu from './Menu';

function FoodInfo({ navigation }) {
  return (
    <>
      <View style={{ height: 20, backgroundColor: 'white' }} />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.cell_fixed}>
          <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} />
        </View>
        <View style={styles.cell}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>Apple</Text>
        </View>
        <View style={styles.cell_fixed}>
          {/* 右上按鈕空間 */}
        </View>
      </View>

      <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center'  }}>
        <View style={styles.body_image}>
        <Button
        title="Go to MyFridge"
        onPress={() => navigation.navigate('MyFridge')}
      />
      <Button
        title="Go to Menu"
        onPress={() => navigation.navigate('Menu')}
      />
        </View>
      </View>
    </>
  );
}

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MenuInfo}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={MenuInfo}
      />
    </Stack.Navigator>
  );
}

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};


const styles = StyleSheet.create({
  cell_fixed: {
    width: 80,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  cell: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  top_text: {
    fontSize: 15,
    textAlign: 'center',
  },
  body_image: {
    height: 50, 
    width: 200, 
    borderWidth: 2, 
    marginTop: 20,
    backgroundColor: '#ffb3d9',
    position:'absolute',
    top:100,
    left:100,
  },
})
export default FoodInfo;