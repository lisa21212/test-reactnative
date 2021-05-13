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
import setloginState from '../App';

const LoginScreen = ({ navigation },props) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
if (!firebase.apps.length) {
firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
  }
  async function signIn(){
    try {
      const res= firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User login successfully!');
      // prpps.setloginState(true)
      
      setEmail('');
      setPassword('');
      setMessage('');
    }
    catch(error){
      setMessage(error.message);
    } 
   };

  return (
    <Background>
      <Header>Fridge in hand</Header>
      <Text style={styles.Singin}>Sign in</Text>
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
            
        
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?
       </Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={signIn}>
        Login
      </Button>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Register at first time</Text>
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
