import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import * as FirebaseCore from 'expo-firebase-core';
import { updateLocale } from 'moment';

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
}
const db = firebase.firestore();
var ref = db.collection("Board");

function Board({ navigation }) {

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

async function update(Texts){
  try {
    const docRef = await db.collection("Board").add({
      comment: Texts
    });
  }
  catch(error) {
    console.error("Error adding document: ", error);
  }
  setTexts("") 
}

  

  const renderItem = ({ item, i }) => (
    <View style={styles.conversations} key={item.id}>
      <Text style={{alignSelf:'center', justifyContent:'center', flex:2, fontSize:16, marginLeft:10}}>{item.comment}</Text>
      <Text style={{alignSelf:'center', justifyContent:'center', flex:1, fontSize:16}}></Text>
    </View>

  );
  return (
    <>
      <View style={{ height: 40, backgroundColor: 'white' }} />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.cell_fixed}>
          <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
        </View>

        <View style={styles.cell}>
          <Text style={{ fontSize: 25, textAlign: 'center' }}>留言版</Text>
        </View>
        <View style={styles.cell_fixed}>
          {/* 右上按鈕空間 */}
        </View>
      </View>

      <View style={{ flex: 0.5, justifyContent: 'flex-start'}}>
        <FlatList
          data={Boards}
          renderItem={renderItem}
          keyExtractor={item => item.conversation}
          style={{ padding:5}}
        >
        </FlatList>
        {/* <Text style={{ fontSize: 20, textAlign: 'center', marginRight: 300, backgroundColor:'white' }}>留言...</Text> */}
        <TextInput style={{height: 50, borderWidth:1, margin:15, borderRadius:8, fontSize:16}} 
        placeholder="在此輸入留言" 
        onChangeText={text => setTexts(text)}
        value={Texts}
        />
        {/* <Text >
                {Texts}
            </Text> */}
        <Button onPress={() => update(Texts)} title="新增"/>
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
    backgroundColor:'white',
    height: 50,
    margin: 8,
    marginTop:10,
    borderRadius: 8,
    flexDirection:'row',
  }
})
export default Board;