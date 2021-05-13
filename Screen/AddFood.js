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
import { ScrollView } from 'react-native-gesture-handler';

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
}

const db = firebase.firestore();

function AddRecipe({ navigation }) {

  const [Boards, setBoards] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const [nameTexts, setnameTexts] = useState("");
  const [descTexts, setdescTexts] = useState("");
  const [peopleTexts, setpeopleTexts] = useState("");
  const [timeTexts, settimeTexts] = useState("");
  const [ingreTexts, setingreTexts] = useState("");
  const [seasonTexts, setseasonTexts] = useState("");
  const [typeTexts, settypeTexts] = useState("");
  const [stepTexts, setstepTexts] = useState("");
  const [keyTexts, setkeyTexts] = useState("");

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes();
    setCurrentDate(
      year + '/' + month + '/' + date + ' ' + hours + ":" + min
    );
  }, []);

  function getData() {
    let newBoard = [];
    db.collection('test').onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        const board = {
          id: doc.id,
          comment: doc.data().comment,
          time: doc.data().time,
        }
        newBoard.push(board)
        var time = board.time.toDate();
        console.log('qq',time)

      });
      setBoards(newBoard)
    });
  }
  useEffect(() => {
    getData()
  }, [])

  function deleteData() {
    const Ref = db.collection('test').get().then(querySnapshot => {
      querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
      })
    })
  }
  function deleteoneData(id) {
    const Ref = db.collection('Fridge').doc(id).delete().then(() => {
      console.log("success");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    })
    setkeyTexts("");

  }

  async function update() {
    try {
      const docRef = await db.collection("test").add({
        Name: nameTexts,
        Number: descTexts,
        Kal: peopleTexts,
        Expire: timeTexts,
        Unit: ingreTexts,
        Category: seasonTexts,
        time: new Date(),
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
  }

  return (
    <>
      <ScrollView>
        <View style={{ height: 40, backgroundColor: 'white' }} />
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.cell_fixed}>
            <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
          </View>

          <View style={styles.cell}>
            <Text style={{ fontSize: 25, textAlign: 'center' }}>新增食材</Text>
          </View>
          <View style={styles.cell_fixed}>
            {/* 右上按鈕空間 */}
          </View>
        </View>

        <View style={[styles.add]}>
          <Text style={{ fontSize: 18, alignSelf: 'center' }}>名稱：</Text>
          <TextInput style={[styles.inputBox]}
            placeholder="例：炒菠菜"
            onChangeText={text => setnameTexts(text)}
            value={nameTexts}
          />
        </View>
        <View>
          <View style={[styles.add]}>
            <Text style={{ fontSize: 18, alignSelf: 'center' }}>數量：</Text>
            <TextInput style={[styles.inputBox]}
              placeholder="輸入數量"
              onChangeText={text => setdescTexts(text)}
              value={descTexts}
            />
          </View>
          <View style={[styles.add]}>
            <Text style={{ fontSize: 18, alignSelf: 'center' }}>熱量：</Text>
            <TextInput style={[styles.inputBox]}
              placeholder="熱量"
              onChangeText={text => setpeopleTexts(text)}
              value={peopleTexts}
            />
          </View>
          <View style={[styles.add]}>
            <Text style={{ fontSize: 18, alignSelf: 'center' }}>期限：</Text>
            <TextInput style={[styles.inputBox]}
              placeholder="例：10"
              onChangeText={text => settimeTexts(text)}
              value={timeTexts}
            />
          </View>
          <View style={[styles.add]}>
            <Text style={{ fontSize: 18, alignSelf: 'center' }}>單位：</Text>
            <TextInput style={[styles.inputBox]}
              placeholder="例：條"
              onChangeText={text => setingreTexts(text)}
              value={ingreTexts}
            />
          </View>
          <View style={[styles.add]}>
            <Text style={{ fontSize: 18, alignSelf: 'center' }}>類別：</Text>
            <TextInput style={[styles.inputBox]}
              placeholder="輸入類別"
              onChangeText={text => setseasonTexts(text)}
              value={seasonTexts}
            />
          </View>
          <TouchableOpacity style={[styles.subButton]} onPress={() => update()} >
            <Text style={{ fontSize: 18, alignSelf: 'center' }}>新增</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subButton]} onPress={() => deleteData()} >
            <Text style={{ fontSize: 18, alignSelf: 'center' }}>刪除全部</Text>
          </TouchableOpacity>
        </View>
        <Text>
          {currentDate}
        </Text>
        {/* <View style={{ flexDirection: 'row' }}>
          <TextInput style={[styles.inputBox]}
            placeholder="在此輸入Key"
            onChangeText={text => setkeyTexts(text)}
            value={keyTexts}
          />
          <TouchableOpacity style={[styles.filterBox]} onPress={() => deleteoneData(keyTexts)} >
            <Text style={{ fontSize: 18, alignSelf: 'center' }}>刪除</Text>
          </TouchableOpacity>

        </View> */}

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
    padding: 3,
  },
  subButton: {
    paddingVertical: 16,
    borderRadius: 10,
    borderColor: 'grey',
    backgroundColor: '#fd8828',
    margin: 5,
  },
  inputBox: {
    height: 50,
    borderWidth: 1,
    marginLeft: 10,
    marginTop: 15,
    borderRadius: 8,
    fontSize: 16,
    flex: 3,
    padding: 10,
  },
  filterBox: {
    paddingVertical: 16,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderColor: 'grey',
    // borderWidth:1,
    backgroundColor: '#fd8828',
    flex: 0.6,
    margin: 15,
  },
})
export default AddRecipe;