import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuInfo from './MenuInfo';




function Menu({navigation}) {
    return (
      <>
      <View style={{ height: 40, backgroundColor: 'white' }} />
      <View style={{ flexDirection: 'row' }}>
          <View style={styles.cell_fixed}>
          </View>
          <View style={styles.cell}>
              <Text style={{ fontSize: 20, textAlign: 'center' }}>推薦菜單</Text>
          </View>
          <View style={{width: 120,height: 40,backgroundColor: 'white', justifyContent: 'center'}}>
              <Button title="收藏" onPress={() => navigation.navigate('Keep')} />
          </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>推薦菜單頁面</Text>
      <Button title="炒菠菜" onPress={() => navigation.navigate(MenuInfo)} />
    </View>
    </>
    );
  }

  export default Menu;



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

