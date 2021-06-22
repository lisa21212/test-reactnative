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
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown, GroupDropdown, MultiselectDropdown, } from 'sharingan-rn-modal-dropdown';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import DropDownPicker from 'react-native-dropdown-picker';






if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
}
const db = firebase.firestore();
var ref = db.collection("Fridge")
var TESTref = db.collection("testFridge")



function FoodInfo({ navigation, route }) {

  const { item } = route.params
  const [valueSS, setValueSS] = useState('');
  const [Num, setNum] = useState(valueSS);
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  let TempTime;

  if (Array.isArray(item.Time)) {
    const Temptime = item.Time.map((item) => {
      return {
        value: item.Number,
        label: item.Time.toDate().toDateString()
      }
    })
    TempTime = Temptime;
  }

  console.log("Temptime",TempTime)

  function updatecount() {
    let tempT = [...TempTime]
    let tempobj = [];
    let temp = [];
    tempT.map((item) => {
      temp.push(item.label);
      temp.push(item.value);
    })
    if (temp.includes(date.toDateString())){

    }else{
      if (Num != 0){
        temp.push(date.toDateString());
        temp.push(Num);
      }
    }
    const index = temp.indexOf(valueSS)
    temp[index] = Num;
    for (let i = 0; i < temp.length ; i+=2){
      const obj ={
        label: temp[i],
        value: temp[i+1],
      }
      tempobj.push(obj)
    }
    tempT = tempobj;
    TempTime = tempT;
  }

  const onChangeSS = (value) => {
    setValueSS(value);
    setNum(valueSS);
    // console.log("date",value)
  };

  const onChange = (event, selectedDate) => {
    let temp = [];
    TempTime.map((item) => {
      temp.push(item.label);
      temp.push(item.value);
    })
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if (temp.includes(date.toDateString())) {
      setNum(temp[temp.indexOf(date.toDateString()) + 1]);
    } else {
      setNum(0);
    }
    // console.log(date.toDateString())
    // console.log('sss',TempTime)

  };

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

  function toTimestamp(abc){
    var datum = Date.parse(abc);
    return datum;
   }


  function update(Num) {
    updatecount()
    console.log(TempTime)
    const temp = TempTime.map((item) => (
      {
        Number: item.value,
        Time: new Date(toTimestamp(item.label)),
      }
    ));
    var count = 0;
    for (var i = 0; i < TempTime.length; i++) {
      count += TempTime.map((item) => item.value)[i];
    }
    const ref = db.collection("Fridge").doc(item.id).update({
      Number: count,
      // Leftday: item.Leftday,
      inTime: temp,
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
              <Text style={{ fontSize: 20, marginTop: 10 }}>放入時間:</Text>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ height: 50, width: 150 }}>
                  <Dropdown
                    label="選擇日期"
                    data={TempTime}
                    value={valueSS}
                    onChange={onChangeSS}
                  />
                </View>
                <View style={{ height: 36, marginTop: 30, width: 200, marginLeft: 80 }}>

                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                  />
                </View>

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
            marginTop: 20
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

  },

  textbox: {
    height: 170,
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