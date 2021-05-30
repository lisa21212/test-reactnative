import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import * as FirebaseCore from 'expo-firebase-core';

import { Images } from '../config/imageConfig'


if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
}
const db = firebase.firestore();
db.ref = '/Fridge'
var ref = db.collection("Fridge").orderBy("Expire", "asc");
var TESTref = db.collection("testFridge")


function MyFridge({ navigation }) {
    const [Fruit, setFruits] = useState([]);
    const [DisaplyOfData, setDisplayOfData] = useState([]);
    const [AllFood, setAllFood] = useState([]);
    const [category, setCategory] = useState([]);
    const [Search, setSeacrch] = useState("");


    useEffect(() => {
        if (category.length == 0) {
            setDisplayOfData(Fruit)
            return
        }
        const temp = Fruit.filter((data) => {
            return category.includes(data.Category)
        })
        setDisplayOfData(temp)
    }, [category])

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

    const handleSearch = (text) => {
        if (text === '') {
            setSeacrch('')
            setDisplayOfData(Fruit)
        } else {
            const temp = [...Fruit]
            console.log(temp)
            let searchData = temp.filter(e =>
                e.Name === text
            )
            setSeacrch(text);
            setDisplayOfData(searchData)
        }
    }

    async function getData(callback) {
            console.log('1')
            let newFruits = [];
            let Food = [];
            ref.onSnapshot(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const fruit = {
                        id: doc.id,
                        Name: doc.data().Name,
                        Number: doc.data().Number,
                        Url: Images[doc.data().Name],
                        Expire: doc.data().Expire,
                        Category: doc.data().Category,
                        Kal: doc.data().Kal,
                        Unit: doc.data().Unit,
                        Time: doc.data().inTime,
                    }
                    if (fruit.Name === "鮮魚") {
                        fruit.Unit = "條"
                    }
                    newFruits.push(fruit)
                    Food.push(fruit.Name)
                })
                setFruits(newFruits)
                setDisplayOfData(newFruits)
                setAllFood(Food)
                console.log("Foooood", AllFood)
                console.log('2')
                callback()
            })
            console.log("3")
    }



    useEffect(() => {
        getData(function() {
            console.log('4')
            console.log("Allfood", AllFood)
        })
    }, [])

    const renderItem = ({ item, i }) => (
        <ScrollView>
            <View style={{ flex: 15, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity style={styles.test} key={item.id} onPress={() => navigation.navigate('FoodInfo', { item })}>
                        <Image source={item.Url} style={{ height: 60, flex: 0.5 }} />
                        <View style={{ flex: 2, flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, flex: 1, textAlign: 'center' }}>{item.Expire} 天到期</Text>
                            <Text style={{ fontSize: 18, flex: 1, textAlign: 'center' }}>{item.Number} {item.Unit}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

    const activeStyle = (type) => {
        return category.includes(type) ? { backgroundColor: '#fd8828' } : {}
    }


    return (
        <>
            {/* Header */}
            <View style={{ height: 40, backgroundColor: 'white' }} />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cell_fixed}>

                    {/* <Button title="備忘錄" onPress={() => navigation.navigate('addimg')} /> */}
                </View>
                <View style={styles.cell}>
                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '600' }}>我的冰箱</Text>
                </View>
                <View style={{ width: 120, height: 40, backgroundColor: 'white', justifyContent: 'center' }}>
                    <Button title="公告欄" onPress={() => navigation.navigate('Board')} />
                </View>
            </View>
            {/* 搜尋列 */}
            <View style={{
                backgroundColor: "#cccccc",
                borderRadius: 20,
                padding: 5,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 8,
                margin: 10,
            }}>
                <TextInput placeholder="輸入食材名稱"
                    placeholderTextColor="black"
                    value={Search}
                    onChangeText={handleSearch}
                    style={{
                        height: 40,
                        backgroundColor: '#cccccc',
                        fontSize: 18,
                        margin: 0.5,
                        padding: 10,
                    }}>
                </TextInput>
                <Image source={require('../assets/search_black.png')} style={{ width: 25, height: 25, right: 15, position: 'absolute' }} />
            </View>


            {/* 過濾列 */}
            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', paddingBottom: 10 }}>

                <TouchableOpacity style={[styles.filterBox, activeStyle('fruit')]} onPress={() => handleOnClick('fruit')}>
                    <Text style={{ fontSize: 18 }}>水果</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterBox, activeStyle('meat')]} onPress={() => handleOnClick('meat')}>
                    <Text style={{ fontSize: 18 }}>肉類</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterBox, activeStyle('soy')]} onPress={() => handleOnClick('soy')}>
                    <Text style={{ fontSize: 18 }}>豆類</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterBox, activeStyle('sea')]} onPress={() => handleOnClick('sea')}>
                    <Text style={{ fontSize: 18 }}>海鮮</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterBox, activeStyle('veg')]} onPress={() => handleOnClick('veg')}>
                    <Text style={{ fontSize: 18 }}>蔬菜</Text>
                </TouchableOpacity>
            </View>
            {/* 庫存顯示區 */}
            {/* 畫面一開始可以將快要到期的食材放在嫌面 ，期限小於三天的 */}
            <FlatList
                data={DisaplyOfData}
                renderItem={renderItem}
                keyExtractor={item => { return item.id; }}
            >
            </FlatList>

        </>
    );
}


export default MyFridge;


const styles = StyleSheet.create({
    cell_fixed: {
        width: 120,
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
    test: {
        height: 90,
        width: '85%',
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 30,
        alignItems: 'center',
        borderColor: 'lightgrey',
        margin: 5,
        flexDirection: 'row',
        padding: 20,
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