import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import * as FirebaseCore from 'expo-firebase-core';
import { Dropdown, GroupDropdown, MultiselectDropdown, } from 'sharingan-rn-modal-dropdown';

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
}

const db = firebase.firestore();
var ref = db.collection("菜單");
var FOODref = db.collection("Fridge")


function AddRecipe({ navigation }) {

  const [Foods, setFoods] = useState([]);
  const [nameTexts, setnameTexts] = useState("");
  const [descTexts, setdescTexts] = useState("");
  const [peopleTexts, setpeopleTexts] = useState("");
  const [timeTexts, settimeTexts] = useState("");
  const [ingreTexts, setingreTexts] = useState("");
  const [seasonTexts, setseasonTexts] = useState("");
  const [typeTexts, settypeTexts] = useState("");
  const [stepTexts, setstepTexts] = useState("");
  const [selectedImage, setSelectedImage] = useState({ localUri: 'https://i.imgur.com/TkIrScD.png' });
  const [message, setMessage] = useState("");
  const [valueSS, setValueSS] = useState('');
  const [ingreMS, setingreMS] = useState('');
  const [seasonMS, setseasonMS] = useState('');
  const [fields, setfields] = useState([{}]);



  const type = [
    { label: '中式', value: '1' },
    { label: '日式', value: '2' },
    { label: '美式', value: '3' },
    { label: '義式', value: '4' },
    { label: '飯類', value: '5' },
    { label: '麵類', value: '6' }
  ];
  const season = [
    {label: '醬油', value: '1'},
    {label: '鹽', value: '2'},
    {label: '胡椒', value: '3'},
    {label: '油', value: '4'},
    {label: '味噌', value: '5'},
    {label: '豆瓣醬', value: '6'},
    {label: '沙茶醬', value: '7'},
    {label: '番茄醬', value: '8'},
  ]

  const onChangeSS = (value) => {
    setValueSS(value);
  };

  const onChangeMS = (value) => {
    setingreMS(value);
  };

  const onChangeseasonMS = (value) => {
    setseasonMS(value);
  };

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setfields(values);
  }

  async function getFoodData() {
    let newFood = [];
    FOODref.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        const food = {
          label: doc.data().Name,
          Number: doc.data().Number,
          value: doc.id
        }
        newFood.push(food)
      });
      setFoods(newFood)
    });
  }

  useEffect(() => {
    getFoodData()
  }, [])

  async function update() {
    try {
      const docRef = await db.collection("test").add({
        name: nameTexts,
        desc: descTexts,
        people: peopleTexts,
        time: timeTexts,
        ingre: ingreTexts,
        season: seasonTexts,
        type: typeTexts,
        step: stepTexts,
        like: false,
        rank: 1,
      });
    }
    catch (error) {
      console.error("Error adding document: ", error);
    }
    setnameTexts("")
    setdescTexts("")
    setpeopleTexts("")
    settimeTexts("")
    setingreTexts("")
    setseasonTexts("")
    settypeTexts("")
    setstepTexts("")
  }

  return (
    <>
      <View style={{ height: 40, backgroundColor: 'white' }} />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.cell_fixed}>
          <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
        </View>

        <View style={styles.cell}>
          <Text style={{ fontSize: 25, textAlign: 'center' }}>自建食譜</Text>
        </View>
        <View style={styles.cell_fixed}>
          {/* 右上按鈕空間 */}
        </View>
      </View>
      <ScrollView>

        <View style={[styles.add]}>
          <Text style={{ fontSize: 18, alignSelf: 'center' }}>菜名：</Text>
          <TextInput style={[styles.inputBox]}
            placeholder="例：炒菠菜"
            onChangeText={text => setnameTexts(text)}
            value={nameTexts}
          />
        </View>
        <View style={[styles.add]}>
          <Text style={{ fontSize: 18, alignSelf: 'center' }}>簡介：</Text>
          <TextInput style={[styles.inputBox]}
            placeholder="例：簡單的清炒菠菜料理"
            onChangeText={text => setdescTexts(text)}
            value={descTexts}
          />
        </View>
        <View style={[styles.add]}>
          <Text style={{ fontSize: 18, alignSelf: 'center' }}>份數：</Text>
          <TextInput style={[styles.inputBox]}
            placeholder="例：2~3"
            onChangeText={text => setpeopleTexts(text)}
            value={peopleTexts}
          />
          <Text style={{ fontSize: 18, alignSelf: 'center', marginLeft: 10 }}>人份</Text>
        </View>
        <View style={[styles.add]}>
          <Text style={{ fontSize: 18, alignSelf: 'center' }}>時間：</Text>
          <TextInput style={[styles.inputBox]}
            placeholder="例：10"
            onChangeText={text => settimeTexts(text)}
            value={timeTexts}
          />
          <Text style={{ fontSize: 18, alignSelf: 'center', marginLeft: 10 }}>分鐘</Text>
        </View>
        <View style={[styles.addMS]}>
          <Text style={{ fontSize: 18, alignSelf: 'center' }}>標籤：</Text>
          <MultiselectDropdown
            label="選擇食譜類型"
            data={type}
            value={valueSS}
            onChange={onChangeSS}
            chipType="outlined"
          />
        </View>
        <View style={[styles.addMS]}>
          <Text style={{ fontSize: 18, alignSelf: 'center' }}>食材：</Text>
          <MultiselectDropdown
            label="選擇所需食材"
            data={Foods}
            value={ingreMS}
            chipType="outlined"
            onChange={onChangeMS}
            enableSearch
          />
        </View>
        <View style={[styles.addMS]}>
          <Text style={{ fontSize: 18, alignSelf: 'center' }}>調味：</Text>
          <MultiselectDropdown
            label="選擇所需調味料"
            data={season}
            value={seasonMS}
            chipType="outlined"
            onChange={onChangeseasonMS}
          />
        </View>
        
        <View style={[styles.add]}>
          <Text style={{ fontSize: 18, alignSelf: 'center' }}>步驟：</Text>
          {/* <TextInput style={[styles.inputBox]}
            placeholder="例：1.XXX。2.OOO。(步驟間以。分割)"
            onChangeText={text => setstepTexts(text)}
            value={stepTexts}
          /> */}
          
      <TouchableOpacity style={[styles.subButton]} onPress={() => handleAdd()} >
          <Text style={{ fontSize: 18, alignSelf: 'center' }}>+</Text>
        </TouchableOpacity>
          {fields.map((field ,idx) => {
            return (
              <TextInput
              onChangeText={e => handleChange(idx,e)}
              />
            )
          })}
        </View>
        <TouchableOpacity style={[styles.subButton]} onPress={() => update()} >
          <Text style={{ fontSize: 18, alignSelf: 'center' }}>新增</Text>
        </TouchableOpacity>
        {/* <Text>
              {nameTexts}
            </Text> */}


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
    alignSelf: 'center',
  },
  cell: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    flex: 3,
    padding: 10,
  },
  add: {
    flexDirection: 'row',
    padding: 10,
  },
  addMS: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  subButton: {
    paddingVertical: 16,
    borderRadius: 10,
    borderColor: 'grey',
    backgroundColor: '#fd8828',
    margin: 15,
  },
})
export default AddRecipe;