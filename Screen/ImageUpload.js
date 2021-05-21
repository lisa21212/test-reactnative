import React, {useEffect,useState} from 'react';
import { Image, Button, View,StyleSheet, StatusBar, LogBox  ,Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import * as FirebaseCore from 'expo-firebase-core';


export default function ImageUpload() {  
    const [selectedImage, setSelectedImage] =useState({localUri:'https://i.imgur.com/TkIrScD.png'});
    const [message, setMessage] = useState(""); 
  
    if (!firebase.apps.length) {
      firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
    } 
  
    let uploadImage = async(uri) => {
      setMessage("上傳中");
      const filename = uri.split('/').pop();
      const response = await fetch(uri);
      const blob = await response.blob();
      // Create a reference
      const ref = firebase.storage().ref().child(filename);
      // Upload file  
      const snapshot = await ref.put(blob);
      // getDownloadURL
      const url = await snapshot.ref.getDownloadURL();
      console.log("url:"+url);
      setMessage("檔案已上傳");
    }
  
  
    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        setMessage("未給予存取照片的權限");
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();  
      if (!pickerResult.cancelled) {
        //if not cancelled
        setSelectedImage({ localUri: pickerResult.uri });
        uploadImage(pickerResult.uri);
      }
  
    }
    
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.logo} />
        <Button onPress={openImagePickerAsync} title='選擇檔案'/>
        <Text>{message}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#fff',
        //backgroundColor: '#00bfff',
        //flex: 1,
        //display: 'flex',
        //margin: 'auto',
        //flexDirection: 'row',
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#00ffff',
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },
})