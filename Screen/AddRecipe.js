import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import * as FirebaseCore from 'expo-firebase-core';

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
}

const db = firebase.firestore();
var ref = db.collection("菜單");

function AddRecipe({ navigation }) {

  const [Boards, setBoards] = useState([]);
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


  // function getData() {
  //   let newBoard = [];
  //   ref.onSnapshot(querySnapshot => {
  //     querySnapshot.forEach(doc => {
  //       const board = {
  //         id: doc.id,
  //         comment: doc.data().comment,
  //       }
  //       newBoard.push(board)
  //       // console.log('qqq',board)

  //     });
  //     setBoards(newBoard)
  //   });
  // }
  // useEffect(() => {
  //   getData()
  // }, [])

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
      </View>
      <View style={[styles.add]}>
        <Text style={{ fontSize: 18, alignSelf: 'center' }}>時間：</Text>
        <TextInput style={[styles.inputBox]}
          placeholder="例：10"
          onChangeText={text => settimeTexts(text)}
          value={timeTexts}
        />
      </View>
      <View style={[styles.add]}>
        <Text style={{ fontSize: 18, alignSelf: 'center' }}>食材：</Text>
        <TextInput style={[styles.inputBox]}
          placeholder="例：菠菜、蒜、薑"
          onChangeText={text => setingreTexts(text)}
          value={ingreTexts}
        />
      </View>
      <View style={[styles.add]}>
        <Text style={{ fontSize: 18, alignSelf: 'center' }}>調味：</Text>
        <TextInput style={[styles.inputBox]}
          placeholder="例：鹽、油"
          onChangeText={text => setseasonTexts(text)}
          value={seasonTexts}
        />
      </View>
      <View style={[styles.add]}>
        <Text style={{ fontSize: 18, alignSelf: 'center' }}>標籤：</Text>
        <TextInput style={[styles.inputBox]}
          placeholder="例：蔬菜、中式"
          onChangeText={text => settypeTexts(text)}
          value={typeTexts}
        />
      </View><View style={[styles.add]}>
        <Text style={{ fontSize: 18, alignSelf: 'center' }}>步驟：</Text>
        <TextInput style={[styles.inputBox]}
          placeholder="例：1.XXX。2.OOO。(步驟間以。分割)"
          onChangeText={text => setstepTexts(text)}
          value={stepTexts}
        />
      </View>
      <TouchableOpacity style={[styles.subButton]} onPress={() => update()} >
        <Text style={{ fontSize: 18, alignSelf: 'center' }}>新增</Text>
      </TouchableOpacity>
      {/* <Text>
              {nameTexts}
            </Text> */}




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
  subButton: {
    paddingVertical: 16,
    borderRadius: 10,
    borderColor: 'grey',
    backgroundColor: '#fd8828',
    margin: 15,
  },
})
export default AddRecipe;