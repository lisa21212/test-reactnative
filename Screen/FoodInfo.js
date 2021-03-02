import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

function FoodInfo({ navigation }) {
  return (
    <>
      <View style={{ height: 40, backgroundColor: 'white' }} />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.cell_fixed}>
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
      <Button
        title="Go to keep"
        onPress={() => navigation.navigate('KeepRecipe')}
      />
        </View>
      </View>
    </>
  );
}



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
    height: 103, 
    width: 200, 
    borderWidth: 2, 
    backgroundColor: '#ffb3d9',
  },
})
export default FoodInfo;