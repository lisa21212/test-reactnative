import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

import firebase from 'firebase';
import firestore from 'firebase/firestore'
import * as FirebaseCore from 'expo-firebase-core';
import { Images } from '../config/imageConfig'


if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
}
const db = firebase.firestore();
db.ref = '/Fridge'
var ref = db.collection("菜單").orderBy("rank", "desc");

function Keep({ navigation }) {
    const [Keeps, setKeeps] = useState([]);
    const [category, setCategory] = useState([]);
    const [DisplayOfData,setDisplayOfData]=useState([]);
    function getData() {
        let newKeeps = [];
        ref.onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                const keep = {
                    id: doc.id,
                    Name: doc.data().name,
                    desc: doc.data().desc,
                    Url: Images[doc.data().name],
                    people: doc.data().people,
                    type: doc.data().type,
                    time: doc.data().time,
                    ingre: doc.data().ingre,
                    like: doc.data().like,
                }
                if (keep.like === true) {
                    newKeeps.push(keep)
                    console.log(keep)
                    console.log(doc.id)
                }

            });
            setKeeps(newKeeps)
            setDisplayOfData(newKeeps)
        });
    }

    function update(id){
        db.collection('菜單').doc(id).update({like:false}).then(() => {
            getData()

    });
}
    useEffect(() => {
        getData()
        console.log(Keeps);
    }, [])

    const handleOnClick = (type) => {
        const temp = [...category]
        const findIndex = category.findIndex(data => data === type)

        if (findIndex > -1) {
            temp.splice(findIndex, 1)
        } else {
            temp.push(type)
        }
        setCategory(temp)
    }


    useEffect(() => {
        if (category.length == 0) {
            setDisplayOfData(Keeps)
            return
        }

        const temp = Keeps.filter((data) => {
            const types = data.type.split('、')
            const filter = category.join(',')
            return types.some(type => filter.includes(type))
        })
        setDisplayOfData(temp)
    }, [category])


    const renderItem = ({ item, i }) => (
        <ScrollView>
        <View style={{}}>
            <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('MenuInfo')} key={item.id}>
                <Image source={item.Url} style={styles.imageposition} />
                <Text style={styles.textinbox}>
                    {item.Name}
                </Text>
                <Ionicons name="trash-outline" size={35} color="black" style={{ flex: 0.7 }} onPress={() => update(item.id)} />
            </TouchableOpacity>
        </View>
        </ScrollView>

    );
    const activeStyle = (type) => {
        return category.includes(type) ? { backgroundColor: '#fd8828' } : {}
    }
    return (
        <>
            <View style={{ height: 40, backgroundColor: 'white' }} />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cell_fixed}>
                    <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
                </View>
                <View style={styles.cell}>
                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight:"600" }}>收藏食譜</Text>
                </View>
                <View style={styles.cell_fixed}>
                    {/* 右上按鈕空間 */}
                </View>
            </View>

            <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                <TouchableOpacity style={[styles.filterBox, activeStyle('中式')]} onPress={() => handleOnClick('中式')}>
                    <Text style={{ fontSize: 18 }}>中式</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterBox, activeStyle('日式')]} onPress={() => handleOnClick('日式')}>
                    <Text style={{ fontSize: 18 }}>日式</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterBox, activeStyle('美式')]} onPress={() => handleOnClick('美式')}>
                    <Text style={{ fontSize: 18 }}>美式</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterBox, activeStyle('義式')]} onPress={() => handleOnClick('義式')}>
                    <Text style={{ fontSize: 18 }}>義式</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterBox, activeStyle('飯類')]} onPress={() => handleOnClick('飯類')}>
                    <Text style={{ fontSize: 18 }}>飯類</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterBox, activeStyle('麵類')]} onPress={() => handleOnClick('麵類')}>
                    <Text style={{ fontSize: 18 }}>麵類</Text>
                </TouchableOpacity>
            </View>

                <FlatList
                    data={DisplayOfData}
                    renderItem={renderItem}
                    keyExtractor={item => item.conversation}
                >
                </FlatList>

        </>
    );
}

export default Keep;




const styles = StyleSheet.create({
    cell_fixed: {
        width: 80,
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    cell: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagebox: {
        height: 170,
        // width: '90%',
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        borderColor: 'lightgrey',
        margin: 5,
        flexDirection: 'row'
    },
    imageposition: {
        flex: 2,
        height: 120,
        width: 120,
        marginLeft: 30,
        borderRadius: 20
    },
    textinbox: {
        flex: 2,
        textAlign: 'center',
        fontSize: 15,
    },
    filterBox: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'grey',
        // borderWidth:1,
        backgroundColor: 'lightgrey'
    },
})