import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Materialicons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialCicons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { ScrollView } from 'react-native';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import * as FirebaseCore from 'expo-firebase-core';

import DatePicker from 'react-native-date-picker'




if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
}
const db = firebase.firestore();
var ref = db.collection("Fridge")
var TESTref = db.collection("testFridge")



function FoodInfo({ navigation, route }) {

  const { item } = route.params
  const [Num, setNum] = useState(item.Number);
  const [date, setDate] = useState(new Date())


  function addcount() {
    if (item.Unit === "公克") {
      setNum(Num + 50)
    } else {
      setNum(Num + 1)
    }
  }
  function minuscount() {
    if (item.Unit === "公克") {
      setNum(Num - 50)
    } else {
      setNum(Num - 1)
    }
  }
  function update(Num) {
    const ref = db.collection("Fridge").doc(item.id).update({
      Number: Num,
      // Leftday: item.Leftday,
      // inTime: new Date()
    })
  }


  return (
    <>
      <View style={{ height: 40, backgroundColor: 'white' }} />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.cell_fixed}>
          {/* <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} /> */}
        </View>

        <View style={styles.cell}>
          <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: '600' }}>{item.Name}</Text>
        </View>
        <View style={styles.cell_fixed}>
          {/* 右上按鈕空間 */}
        </View>
      </View>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50 }}>
          <View style={styles.body_image}>
            <Image source={item.Url} style={{ height: 190, width: 190 }} />
          </View>

          <View style={styles.boxcontainer}>
            <View style={styles.textbox}>
              <Text style={{ fontSize: 20 }}>放入時間:</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 20 }}>{item.Time.join('/')}</Text>
                {/* <Entypo name="triangle-down" size={20} /> */}
                {/* <DatePicker
                  date={date}
                  onDateChange={setDate}
                /> */}
              </View>
            </View>
            <View style={styles.textbox}>
              <Text style={{ fontSize: 20 }}>建議保存期限:</Text>
              <Text style={{ fontSize: 20 }}>{item.Expire} 天</Text>
            </View>
          </View>

          <View style={styles.boxcontainer}>
            <View style={styles.textbox}>
              <Text style={{ fontSize: 20 }}>數量:</Text>
              <View style={{ flexDirection: 'row' }}>
                <Materialicons name="minus-circle-outline" size={25} color="#fd8728" style={{ paddingHorizontal: 5 }} onPress={() => minuscount()} />
                <Text style={{ fontSize: 20 }}>{Num} {item.Unit}</Text>
                <MaterialCicons name="add-circle-outline" size={25} color="#fd8728" style={{ paddingHorizontal: 5 }} onPress={() => addcount()} />
              </View>

            </View>
            <View style={styles.textbox}>
              <Text style={{ fontSize: 20 }}>熱量評估:</Text>
              <Text style={{ fontSize: 20 }}>{item.Kal} kcal</Text>
            </View>
          </View>
          <TouchableOpacity style={{
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 10,
            borderColor: 'grey',
            backgroundColor: '#ffa459',
            marginTop: 40
          }}
            onPress={() => navigation.goBack()}
            onPressIn={() => update(Num)}
          >
            <Text style={{ fontSize: 20 }}>確認</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  boxcontainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 15,

  },

  textbox: {
    height: 130,
    width: 180,
    borderRadius: 50,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 5,
  },
})
export default FoodInfo;