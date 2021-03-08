import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FoodStyle from '../FridgeFood/FoodStyle'


function FoodInfo({ navigation }) {
  return (
    <>
      <View style={{ height: 40, backgroundColor: 'white' }} />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.cell_fixed}>
          <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
        </View>

        <View style={styles.cell}>
          <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: '600' }}>草莓</Text>
        </View>
        <View style={styles.cell_fixed}>
          {/* 右上按鈕空間 */}
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50 }}>
        <View style={styles.body_image}>
          <Image source={require('../assets/FridgeFood/strawberry.png')} style={{ height: 190, width: 190 }} />
        </View>

        <View style={styles.boxcontainer}>
          <View style={styles.textbox}>
            <Text style={{ fontSize: 20 }}>放入時間::</Text>
            <Text style={{ fontSize: 20 }}>2020/3/8</Text>
          </View>
          <View style={styles.textbox}>
            <Text style={{ fontSize: 20 }}>建議保存期限:</Text>
            <Text style={{ fontSize: 20 }}>5 天</Text>
          </View>
        </View>
        
        <View style={styles.boxcontainer}>
          <View style={styles.textbox}>
            <Text style={{ fontSize: 20 }}>數量:</Text>
            <Text style={{ fontSize: 20 }}>12 顆</Text>
          </View>
          <View style={styles.textbox}>
            <Text style={{ fontSize: 20 }}>熱量評估:</Text>
            <Text style={{ fontSize: 20 }}>30 kcal</Text>
          </View>
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
    height: 275,
    width: 275,
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
  },
  boxcontainer:{ 
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    paddingTop: 15,
    
  },

  textbox: {
    height: 150,
    width: 180,
    borderRadius: 50,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin:5,
  },
})
export default FoodInfo;