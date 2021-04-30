import React, { useState,Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import * as FirebaseCore from 'expo-firebase-core';

const RegisterScreen = ({ navigation }) => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
 const [message, setMessage] = useState("");
    //for error message from signUp
  if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
  }

  async function signUp(){
    try {
      const res = await firebase.auth()
        .createUserWithEmailAndPassword(email, password);
      res.user.updateProfile({Name: Name});
      //console.log('User registered successfully!');
      setName('');
      setEmail('');
      setPassword('');
      setMessage('');
    }
    catch(error){
      setMessage(error.message);
    }
  }

  return (
    <Background>
       <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.check}>上一頁
       </Text>
        </TouchableOpacity>
      </View>
        <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Habbit')}
        >
          <Text style={styles.check}>下一頁
       </Text>
        </TouchableOpacity>
      </View>
      <Header>Register</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name}
        onChangeText={text=>setName(text)}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}  
        //onChangeText={(text) => setEmail({ value: text, error: '' })}
        onChangeText={text=>setEmail(text)}
        secureTextEntry={true} 
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        //onChangeText={(text) => setPassword({ value: text, error: '' })}
        onChangeText={text=>setPassword(text)}       
        secureTextEntry={true}      
        error={!!password.error}
        errorText={password.error}
      />
      <Button
        mode="contained"
        onPress={signUp}
        style={{ marginTop: 4 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}



const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
        
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
      
})

export default RegisterScreen
