import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect}  from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Click from './Click';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.top}/>
      <View style={styles.body}/>
      {/*<Text>Hi! I'm Adrian Lee.</Text>
      <Click count={10}/>
  <StatusBar style="auto" />*/}
  <View style={styles.bottom} />
    </View>

  

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    /*backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  */
  },
  bottom: {
    height: 80,
    backgroundColor: '#808B96',
  },
  top:{
    height: 80,
    backgroundColor: '#E74C3C',
  },
  body:{
    
    backgroundColor:'#e5ffff',
  }
});
