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

function Add({ navigation }) {

  const [Boards, setBoards] = useState([]);
  const [Texts, setTexts] = useState("");

  function getData() {
    let newBoard = [];
    ref.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        const board = {
          id: doc.id,
          comment: doc.data().comment,
        }
        newBoard.push(board)
        // console.log('qqq',board)

      });
      setBoards(newBoard)
    });
  }
  useEffect(() => {
    getData()
  }, [])

  async function update(Texts) {
    try {
      const docRef = await db.collection("Board").add({
        comment: Texts
      });
    }
    catch (error) {
      console.error("Error adding document: ", error);
    }
    setTexts("")
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

     
        
        <View style={{ flexDirection: 'row' }}>
          <TextInput style={[styles.inputBox]}
            placeholder="在此輸入留言"
            onChangeText={text => setTexts(text)}
            value={Texts}
          />
            <TouchableOpacity style={[styles.filterBox]} onPress={() => update(Texts)} >
              <Text style={{ fontSize: 18, alignSelf:'center'}}>新增</Text>
            </TouchableOpacity>
        </View>

      
    </>
  );
}

const styles = StyleSheet.create({
  body_image: {
    height: 300,
    width: 400,
    borderWidth: 2,
    backgroundColor: 'grey',
  },
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
  conversations: {
    backgroundColor: 'white',
    height: 50,
    margin: 8,
    marginTop: 10,
    borderRadius: 8,
    flexDirection: 'row',
  },
  inputBox:{
    height: 50, 
    borderWidth: 1, 
    marginLeft:10, 
    marginTop:15, 
    borderRadius: 8, 
    fontSize: 16, 
    flex: 3,
  },
  filterBox: {
    paddingVertical: 16,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderColor: 'grey',
    // borderWidth:1,
    backgroundColor: '#fd8828' ,
    flex: 0.6,
    margin:15 ,
  },
})
export default Add;