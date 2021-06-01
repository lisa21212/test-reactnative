import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, FlatList, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import * as FirebaseCore from 'expo-firebase-core';



function Notification({ navigation }) {

    if (!firebase.apps.length) {
        firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
    }
    const db = firebase.firestore();
    const [notifications, setnotification] = useState([]);
    const [Expirewarning, setExpirewarning] = useState([]);
    const [oneDwarning, setoneDwarning] = useState([]);
    const [threeDwarning, setthreeDwarning] = useState([]);



    async function getFridgeData() {
        const fridge0 = [];
        const fridge1 = [];
        const fridge3 = [];
        try {
            const querySnapshot = await db.collection("Fridge").orderBy("Leftday", "asc").get();
            querySnapshot.forEach((doc) => {
                const fruit = {
                    id: doc.id,
                    Name: doc.data().Name,
                    Leftday: doc.data().Leftday,
                }
                if (fruit.Leftday < 1){
                    fridge0.push(fruit);
                }else if (fruit.Leftday === 1){
                    fridge1.push(fruit);
                }else if (fruit.Leftday > 1 && fruit.Leftday <= 3 ){
                    fridge3.push(fruit);
                }
            });//foreach
            setExpirewarning(fridge0);
            setoneDwarning(fridge1);
            setthreeDwarning(fridge3);
            // console.log('expire',Expirewarning);
            console.log('1 day',oneDwarning);
            console.log('3 day',threeDwarning);
        }//try
        catch (e) { console.log(e); }
    }//readData

    async function readData() {
        const newnotifications = [];
        try {
            const querySnapshot = await db.collection("notification")
                .orderBy("time", "asc").get();
            querySnapshot.forEach((doc) => {
                let time = doc.data().time.toDate();
                const newnotification = {
                    notice: doc.data().notice,
                    time: time,
                    id: doc.id,
                }
                newnotifications.push(newnotification);
            });//foreach
            setnotification(newnotifications);
            // console.log(notifications)
        }//try
        catch (e) { console.log(e); }
    }//readData

async function ExpireNoticeLisstner() {
    let temp = [...Expirewarning];
    if (temp.length > 0) {
        const docRef = await db.collection("notification").add({
            notice: temp.map((item) => {
                return item.Name+"已經過期"
            }),
            time: new Date(),
          });
    }
}

async function onedayNoticeLisstner() {
    let temp = [...oneDwarning];
    if (temp.length > 0) {
        const docRef = await db.collection("notification").add({
            notice: temp.map((item) => {
                return item.Name
            })+"將於一天後過期",
            time: new Date(),
          });
    }
}

async function threedayNoticeLisstner() {
    let temp = [...threeDwarning];
    if (temp.length > 0) {
        const docRef = await db.collection("notification").add({
            notice: temp.map((item) => {
                return item.Name
            })+"將於三天內過期",
            time: new Date(),
          });
    }
}

    useEffect(() => {
        readData();
        getFridgeData();
        ExpireNoticeLisstner();
        onedayNoticeLisstner();
        threedayNoticeLisstner();
    }, []);



    const renderItem = ({ item, i }) => (
        <View style={{
            backgroundColor: 'white',
            height: 50,
            margin: 8,
            marginTop: 10,
            borderRadius: 8,
            flexDirection: 'row',
        }} key={item.id}>
            <MaterialCommunityIcons name="bell" size={25} color="#fc9642" style={{ justifyContent: 'center', padding: 15 }} />
            <Text style={{ alignSelf: 'center', justifyContent: 'center', flex: 2, fontSize: 16, marginLeft: 10 }}>{item.notice}</Text>
            <Text style={{ alignSelf: 'center', justifyContent: 'center', flex: 1, fontSize: 16 }}>{item.time.toDateString().slice(4, 10)}</Text>
        </View>

    );

    return (
        <>
            {/* Header */}
            <View style={{ height: 40, backgroundColor: 'white' }} />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cell_fixed}>
                    {/* <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} /> */}
                </View>

                <View style={styles.cell}>
                    <Text style={{ fontSize: 25, textAlign: 'center' }}>通知</Text>
                </View>
                <View style={styles.cell_fixed}>
                    {/* 右上按鈕空間 */}
                </View>
            </View>

            <View style={{ flex: 0.5, justifyContent: 'flex-start' }}>
                <FlatList
                    data={notifications}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={{ padding: 5 }}
                >
                </FlatList>
            </View>
        </>
    );
}

export default Notification;


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
        backgroundColor: 'white',
        height: 50,
        margin: 8,
        marginTop: 10,
        borderRadius: 8,
        flexDirection: 'row',

    }
})