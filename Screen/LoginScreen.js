import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
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
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import * as FirebaseCore from 'expo-firebase-core';

const LoginScreen = ({ navigation }, props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
  }
  async function signIn() {

    firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
      const uid = response.user.uid
      const usersRef = firebase.firestore().collection('users')
      usersRef.doc(uid).get().then((dbDoc) => {
        if (!dbDoc.exists) {
          alert("User does not exist anymore.")
          return;
        }
        const user = dbDoc.data()
      })
        .catch(error => {
          alert(error)
        })
    })
    console.log('User login successfully!');
    setEmail('');
    setPassword('');
    setMessage('');
  };

  return (
    <Background>
      <Header>Fridge in hand</Header>
      <Text style={styles.Singin}>登入</Text>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={(text) => setEmail(text)}
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
        onChangeText={(text) => setPassword(text)}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />


      
      <Button onPress={signIn}>
        登入
      </Button>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>沒有帳號嗎？立即註冊</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}


const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    marginBottom: 50,
  },
  row: {
    flexDirection: 'row',
    marginTop: 5,
  },
  forgot: {
    fontSize: 14,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  Singin: {
    fontWeight: 'bold',
    fontSize: 26,

    color: theme.colors.primary,
  }
})

export default LoginScreen
