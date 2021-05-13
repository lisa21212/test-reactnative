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
            console.log(notifications)
        }//try
        catch (e) { console.log(e); }
    }//readData
    useEffect(() => {
        readData();
    },[]);
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
            <Text style={{ alignSelf: 'center', justifyContent: 'center', flex: 1, fontSize: 16 }}>{item.time.toTimeString().slice(0,5)}</Text>
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