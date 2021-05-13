import 'react-native-gesture-handler';
import React,{ useState }  from 'react'
import { TouchableOpacity,StyleSheet, View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import BouncyCheckbox from "react-native-bouncy-checkbox";


const Habbit = ({ navigation }) =>{
    return (

    <Background>
     <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.check}>上一頁
       </Text>
        </TouchableOpacity>
      </View>
        <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => navigation.navigate('People')}
        >
          <Text style={styles.check}>下一頁
        </Text>
        </TouchableOpacity>
</View>
    <Header>飲食習慣</Header>

<BouncyCheckbox style={{padding:10}} onPress={(isChecked: boolean) => {}} text='不吃牛肉'/>
    <BouncyCheckbox style={{padding:10}} onPress={(isChecked: boolean) => {}} text='不吃豬肉'/>
        <BouncyCheckbox style={{padding:10}} onPress={(isChecked: boolean) => {}} text='不吃海鮮'/>
            <BouncyCheckbox style={{padding:10}} onPress={(isChecked: boolean) => {}} text='蛋奶素   '/>

    <BouncyCheckbox style={{padding:10}} onPress={(isChecked: boolean) => {}} text='全素       '/>

    <Text style={styles.Singin}></Text>
     <Text style={styles.Singin}></Text>
  </Background>
)
}
const styles = StyleSheet.create({
    Singin: {
    fontSize: 16,
        flex: 2,
        flexDirection: 'column',
    color: theme.colors.primary,
    },
    check: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.colors.primary,
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
