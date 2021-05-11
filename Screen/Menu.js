import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Materialicons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler';
import Stores from './Stores';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import * as FirebaseCore from 'expo-firebase-core';

import { Images } from '../config/imageConfig'


if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
}
const db = firebase.firestore();
db.ref = '/Fridge';
var ref = db.collection("菜單").orderBy("rank", "desc");



function Menu({ navigation }) {

    const [Menu, setMenu] = useState([]);
    const [DisaplyOfData, setDisplayOfData] = useState([]);
    const [category, setCategory] = useState([]);




    function getData() {
        let newMenu = [];
        ref.onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                const menu = {
                    id: doc.id,
                    Name: doc.data().name,
                    desc: doc.data().desc,
                    url: Images[doc.data().name],
                    people: doc.data().people,
                    type: doc.data().type,
                    time: doc.data().time,
                    ingre: doc.data().ingre,
                    season: doc.data().season,
                    like: doc.data().like,
                }
                newMenu.push(menu)
                // console.log('qqq', Menu)

            });
            setMenu(newMenu)
            setDisplayOfData(newMenu)
        });
    }

    useEffect(() => {
        getData()
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
        // console.log(category)
        if (category.length == 0) {
            setDisplayOfData(Menu)
            return
        }
        const temp = Menu.filter((data) => {
            const types = data.type.split('、')
            const filter = category.join(',')
            return types.some(type => filter.includes(type))
        })
        setDisplayOfData(temp)
    }, [category])




    const TwoCellAlert = () =>
        Alert.alert(
            '想要更改推薦菜單？',
            '拜託不要更換啦',
            [
                { text: "Cancel", onPress: () => console.log("Cancel Pressed"), },
                { text: "OK", onPress: () => console.log("OK Pressed"), style: "cancel" },
            ]
        )

    const [heart, setHeart] = useState([])


    const renderItem = ({ item, i }) => (
        <ScrollView>
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={{
                    height: 170,
                    // width: '90%',
                    borderWidth: 2,
                    backgroundColor: 'white',
                    borderRadius: 50,
                    alignItems: 'center',
                    borderColor: 'lightgrey',
                    margin: 5,
                    flexDirection: 'row'
                }} onPress={() => navigation.navigate('MenuInfo', { item })}>
                    <Image source={item.url} style={{
                        flex: 2,
                        height: 120,
                        width: 120,
                        marginLeft: 30,
                        borderRadius: 20
                    }} />
                    <View style={styles.textinbox}>
                        <Text>{item.Name}{'\n'}</Text>
                        <Text>食材: {item.ingre}</Text>
                    </View>
                    <Materialicons onPress={() => setHeart(!item.like)}
                        name={item.like ? 'favorite' : 'favorite-outline'}
                        size={35} style={{ flex: 0.7, color: 'red' }} />
                </TouchableOpacity>
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
                    <Ionicons name="ios-add" size={40} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.navigate('Stores')} />
                </View>
                <View style={styles.cell}>
                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '600' }}>推薦菜單</Text>
                </View>
                <View style={{ width: 120, height: 40, backgroundColor: 'white', justifyContent: 'center' }}>
                    <Materialicons name="favorite" size={30} color="black" style={{ alignSelf: 'flex-end', marginRight: 15 }} onPress={() => navigation.navigate('Keep')} />
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
                <TextInput placeholder="Search somthing to eat"
                    placeholderTextColor="black"
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
            {/* 類別列 */}
            {/* <ScrollView horizontal={true}> */}
            <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', paddingBottom: 10 }}>

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
            {/* </ScrollView> */}


            {/* 推薦食譜區 */}
            <View>
                <Text style={{ fontSize: 25, fontWeight: '600', marginLeft: 20, margin: 5 }}>推薦食譜</Text>
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Pineapple')}>
                            <Ionicons name="settings-outline" size={20} color="black" style={styles.setting_icon} onPress={TwoCellAlert} />
                            <Image source={require('../assets/Recipe/豬肋排.jpg')} style={styles.image_style} />
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ marginTop: 10 }}>醬燒豬肋排</Text>
                                <Text>熱量: 555 kal</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Ionicons name="settings-outline" size={20} color="black" style={styles.setting_icon} onPress={TwoCellAlert} />
                            <Image source={require('../assets/Recipe/海鮮羹.jpg')} style={styles.image_style} />
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ marginTop: 10 }}>海鮮羹</Text>
                                <Text>熱量: 456 kal</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Ionicons name="settings-outline" size={20} color="black" style={styles.setting_icon} onPress={TwoCellAlert} />
                            <Image source={require('../assets/Recipe/炒飯.jpg')} style={styles.image_style} />
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ marginTop: 10 }}>蝦仁蛋炒飯</Text>
                                <Text>熱量: 430 kal</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Ionicons name="settings-outline" size={20} color="black" style={styles.setting_icon} onPress={TwoCellAlert} />
                            <Image source={require('../assets/Recipe/海參.jpg')} style={styles.image_style} />
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ marginTop: 10 }}>精華海參煲</Text>
                                <Text>熱量: 510 kal</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Ionicons name="settings-outline" size={20} color="black" style={styles.setting_icon} onPress={TwoCellAlert} />
                            <Image source={require('../assets/Recipe/砂鍋雞.jpg')} style={styles.image_style} />
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ marginTop: 10 }}>主廚砂鍋雞</Text>
                                <Text>熱量: 420 kal</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Ionicons name="settings-outline" size={20} color="black" style={styles.setting_icon} onPress={TwoCellAlert} />
                            <Image source={require('../assets/Recipe/水煮牛.jpg')} style={styles.image_style} />
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ marginTop: 10 }}>重慶水煮牛</Text>
                                <Text>熱量: 450 kal</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            {/* 其他食譜 */}
            <View style={{ flex: 1, marginTop: 5 }}>
                <Text style={{ fontSize: 25, fontWeight: '600', marginLeft: 20, margin: 5 }}>其他食譜</Text>
                <FlatList
                    data={DisaplyOfData}
                    renderItem={renderItem}
                    keyExtractor={item => {return item.id;}}
                >
                </FlatList>
            </View>

        </>
    );
}

export default Menu;



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
    body_image: {
        height: 180,
        width: 150,
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lightgrey',
        margin: 5,

    },
    image_style: {
        height: 120,
        width: 120,
        borderRadius: 30,
        flex: 2.5,
    },
    setting_icon: {
        alignSelf: 'flex-end',
        flex: 0.5,
        margin: 5
    },
    imagebox: {
        height: 170,
        width: '90%',
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
        margin: 10,
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

