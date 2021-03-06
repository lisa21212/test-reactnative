import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { styles } from './FoodStyle';


function FoodInfo({ navigation }) {
  return (
    <>
      <View style={{ height: 40, backgroundColor: 'white' }} />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.cell_fixed}>
          <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
        </View>

        <View style={styles.cell}>
          <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: '600' }}>香蕉</Text>
        </View>
        <View style={styles.cell_fixed}>
          {/* 右上按鈕空間 */}
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50 }}>
        <View style={banana.image}>
          <Image source={require('../assets/FridgeFood/banana.jpg')} style={{ height: 160, width: 220 }} />
        </View>

        <View style={styles.boxcontainer}>
          <View style={styles.textbox}>
            <Text style={{ fontSize: 20 }}>放入時間::</Text>
            <Text style={{ fontSize: 20 }}>2020/3/5</Text>
          </View>
          <View style={styles.textbox}>
            <Text style={{ fontSize: 20 }}>建議保存期限:</Text>
            <Text style={{ fontSize: 20 }}>15 天</Text>
          </View>
        </View>

        <View style={styles.boxcontainer}>
          <View style={styles.textbox}>
            <Text style={{ fontSize: 20 }}>數量:</Text>
            <Text style={{ fontSize: 20 }}>4 根</Text>
          </View>
          <View style={styles.textbox}>
            <Text style={{ fontSize: 20 }}>熱量評估:</Text>
            <Text style={{ fontSize: 20 }}>90 kcal</Text>
          </View>
        </View>
      </View>
    </>
  );
}


const banana = StyleSheet.create({
  image: {
    height: 275,
    width: 275,
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
  },
})

export default FoodInfo;