import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import { Text } from 'react-native-paper'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import * as FirebaseCore from 'expo-firebase-core';

 async function signout() {
  try {
    await firebase.auth().signOut();
    console.log("logout")
} catch (e) {
    console.log(e);
}
 }
 


const Preference = ({ navigation }) => {
  const [status, setStatus] = useState(0)
  return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Habbit')}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>上一頁</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity nPress={() => navigation.navigate('People')}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>下一頁</Text>
        </TouchableOpacity>
      </View>
      <Header>偏好設定</Header>
      <View style={styles.container3}>
        <Text style={styles.row}>海鮮</Text>
      </View>
      <View style={styles.cc}>
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='蝦子' />
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='黃魚' />
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='海膽' />
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='石斑' />
      </View>
      <View style={styles.container3}>
        <Text style={styles.row}>肉類</Text>
      </View>
      <View style={styles.cc}>
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='牛肉' />
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='豬肉' />
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='羊肉' />
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='雞肉' />
      </View>
      <View style={styles.container3}>
        <Text style={styles.row}>菜類</Text>
      </View>
      <View style={styles.cc}>
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='花椰菜' />
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='大陸妹' />
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='地瓜葉' />
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='番茄' />
      </View>
      <View style={styles.container3}>
        <Text style={styles.row}>家庭人數</Text>
      </View>
      <View style={styles.cc}>
        <BouncyCheckbox style={{ padding: 1 }} onPress={(isChecked: boolean) => { }} text='一位' />
        <BouncyCheckbox style={{ padding: 1 }} onPress={(isChecked: boolean) => { }} text='二位' />
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='三位' />
        <BouncyCheckbox onPress={(isChecked: boolean) => { }} text='四位' />
        <BouncyCheckbox onPress={(isChecked: boolean) => { }} text='五位' />
      </View>
      <View style={styles.container3}>
        <Text style={styles.row}>店家偏好設定</Text>
      </View>
      <View style={styles.cc}>
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='頂好' />
        <BouncyCheckbox style={{ padding: 15 }} onPress={(isChecked: boolean) => { }} text='家樂福' />
      </View>
      <Button
        mode="contained"
        onPress={signout}
        style={{ marginTop: 6 }}>
        登出
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  container3: {
    flex: 1,
    padding: 10,
  },
  row: {
    padding: 4,
    borderBottomColor: "grey",
    alignItems: 'flex-start',
    fontSize: 18,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
  ,
  cc: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  container1: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    right: 4,
  },



}

)

export default Preference
