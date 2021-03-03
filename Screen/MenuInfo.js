import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

function MenuInfo({navigation}) {
    return (
      <>
      <View style={{ height: 40, backgroundColor: 'white' }} />
      <View style={{ flexDirection: 'row' }}>
          <View style={styles.cell_fixed}>
          <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.cell}>
              <Text style={{ fontSize: 20, textAlign: 'center' }}>炒菠菜</Text>
          </View>
          <View style={{width: 120,height: 40,backgroundColor: 'white', justifyContent: 'center'}}>
          </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>菜單詳細資訊頁面</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </>
    );
  }

  export default MenuInfo;


  const styles = StyleSheet.create({
    cell_fixed: {
        width: 120,
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
})

