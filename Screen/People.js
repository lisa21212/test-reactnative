import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import BouncyCheckbox from "react-native-bouncy-checkbox";


const Habbit = ({ navigation }) => {
  return (

    <Background>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Habbit')}
        >
          <Text style={styles.check}>上一頁
       </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Preference')}
        >
          <Text style={styles.check}>下一頁
        </Text>
        </TouchableOpacity>
      </View>
      <Header>家庭人數設定</Header>
      <Text style={styles.para}>系統會根據選擇的人數推薦份量</Text>
      <BouncyCheckbox style={{ padding: 10 }} onPress={(isChecked: boolean) => { }} text='1人' />
      <BouncyCheckbox style={{ padding: 10 }} onPress={(isChecked: boolean) => { }} text='2人' />
      <BouncyCheckbox style={{ padding: 10 }} onPress={(isChecked: boolean) => { }} text='3人' />
      <BouncyCheckbox style={{ padding: 10 }} onPress={(isChecked: boolean) => { }} text='4人' />
      <BouncyCheckbox style={{ padding: 10 }} onPress={(isChecked: boolean) => { }} text='5人' />
      <BouncyCheckbox style={{ padding: 10 }} onPress={(isChecked: boolean) => { }} text='6人' />
    </Background>
  )
}
const styles = StyleSheet.create({
  check: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.colors.primary,
  },
  para: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 18,
    color: theme.colors.secondary,
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

export default Habbit
