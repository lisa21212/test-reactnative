import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet, Image, FlatList, findNodeHandle } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import * as FirebaseCore from 'expo-firebase-core';


const Stack = createStackNavigator();
const db = firebase.firestore();
var FOODref = db.collection("Fridge")


function MenuInfo({ navigation, route }) {

    const { item } = route.params
    const [Foods, setFoods] = useState([]);
    const [resArr, setresArr] = useState([]);
    // console.log('item', item);
    let temp = item.temp;
    let season = item.season;
    let seasonArr = season.split('、');
    let ingre = item.ingre;
    let ingreArr = ingre.split('、');
    console.log('season',seasonArr)
    // console.log('ingre', ingreArr);



    function getFoodData(callback) {
        let newFood = [];
        FOODref.onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                const food = {
                    Name: doc.data().Name,
                    Number: doc.data().Number,
                }
                newFood.push(food)
            });
            setFoods(newFood)
            callback()
            console.log('Foods',Foods)
        });
    }

    useEffect(() => {
        getFoodData(function(){
            let res = compare(Foods,temp)
            setresArr(res.map((item) => {
                return item.Name
            }))
        })
        console.log('resArr',resArr)
        // console.log('ssss',Foods)
    }, [])


    const compare = (arr, filterarr, callback) => (
        arr.filter(el =>
            filterarr.some(f =>
                f.Name === el.Name && el.Number >= f.Number
            )
        )
    );



    return (
        <>

            <View style={{ height: 40, backgroundColor: 'white' }} />
            <View style={{ zIndex: 100, height: 40, width: 40, backgroundColor: 'white', borderRadius: 20, position: 'absolute', top: 50, left: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="chevron-back" size={30} color="black" onPress={() => navigation.goBack()} />
            </View>

            <ScrollView>
                <View>
                    <Image source={item.url} style={{ width: '100%', height: 200 }}>
                    </Image>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, flex: 1 }}>
                            <Text style={{ fontSize: 30, fontWeight: '600' }}>{item.Name}</Text>
                            <View style={{ height: 40, width: 100, borderRadius: 15, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: '400' }}>{item.time} 分</Text>
                            </View>
                            <View style={{ height: 40, width: 100, borderRadius: 15, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: '400' }}>{item.people} 人份</Text>
                            </View>
                        </View>

                        {/* 以下為簡介區 */}
                        <View>
                            <Text style={{ marginTop: 20, fontSize: 20, lineHeight: 20 }}>簡介:</Text>
                            <View style={{ width: '100%', height: 2, backgroundColor: '#000', marginVertical: 4 }} />
                            <Text style={{ fontSize: 16, lineHeight: 20 }}>{item.desc}</Text>

                            <Text style={{ marginTop: 30, fontSize: 20, lineHeight: 20 }}>食材:</Text>
                            <View style={{ width: '100%', height: 2, backgroundColor: '#000', marginVertical: 4 }} />

                            <View style={{ flexDirection: 'row', marginVertical: 4, flexWrap: 'wrap' }}>
                                {ingreArr.map((i) => {
                                    return (
                                        <View style={{ flexDirection: 'row', width: '50%' }} key={i}>
                                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>{i}</Text>
                                            <View style={{ alignItems: 'flex-end', flex: 1, marginHorizontal: 20 }}>
                                                <Ionicons name={resArr.includes(i) ? "checkmark" : "close"} size={30} color={resArr.includes(i) ? "green" : "red"} />
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>

                            <Text style={{ marginTop: 30, fontSize: 20, lineHeight: 20 }}>調味料:</Text>
                            <View style={{ width: '100%', height: 2, backgroundColor: '#000', marginVertical: 4 }} />
                            <View style={{ flexDirection: 'row', marginVertical: 4, flexWrap: 'wrap' }}>
                                {seasonArr.map((i) => {
                                    return (
                                        <View style={{ flexDirection: 'row', width: '50%', paddingVertical:6 }} key={i}>
                                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>{i}</Text>
                                            {/* <View style={{ alignItems: 'flex-end', flex: 1, marginHorizontal: 20 }}>
                                                <Ionicons name={resArr.includes(i) ? "checkmark" : "close"} size={30} color={resArr.includes(i) ? "green" : "red"} />
                                            </View> */}
                                        </View>
                                    )
                                })}
                            </View>
                        </View>


                        {/* 以下為步驟區 */}
                        <View>
                            <Text style={{ marginTop: 30, fontSize: 16, lineHeight: 20 }}>步驟:</Text>
                            <View style={{ width: '100%', height: 2, backgroundColor: '#000', marginVertical: 4 }} />
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>1. </Text>
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>絲瓜去皮，切小塊。切少許蒜片、薑絲、蔥白備用</Text>
                            <Image source={require('../assets/Recipe/步驟/B1.webp')} style={{ width: '100%', height: 150 }} />
                            <View style={{ width: '100%', height: 1, backgroundColor: '#999999', marginVertical: 4 }} />
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>2. </Text>
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>先爆香蒜片和薑絲後，將處理好的絲瓜塊入鍋拌炒。
                        拌炒的過程中加入調味粉，一點水加速軟化（水不必太多，絲瓜軟化後會出很多水）</Text>
                            <Image source={require('../assets/Recipe/步驟/B2.webp')} style={{ width: '100%', height: 150 }} />
                            <View style={{ width: '100%', height: 1, backgroundColor: '#999999', marginVertical: 4 }} />
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>3. </Text>
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>絲瓜軟後先從鍋中取出，再將調味好的牛肉稍微拌炒（3分熟度即可）</Text>
                            <Image source={require('../assets/Recipe/步驟/B3.webp')} style={{ width: '100%', height: 150 }} />
                            <View style={{ width: '100%', height: 1, backgroundColor: '#999999', marginVertical: 4 }} />
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>4. </Text>
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>再將原先的絲瓜倒入鍋中，和牛肉一起拌炒</Text>
                            <Image source={require('../assets/Recipe/步驟/B4.webp')} style={{ width: '100%', height: 150 }} />
                            <View style={{ width: '100%', height: 1, backgroundColor: '#999999', marginVertical: 4 }} />
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>5. </Text>
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>燒入味後再加入預先切好的蔥，即可起鍋</Text>
                            <Image source={require('../assets/Recipe/步驟/B5.webp')} style={{ width: '100%', height: 150 }} />
                            <View style={{ width: '100%', height: 1, backgroundColor: '#999999', marginVertical: 4 }} />
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>6. </Text>
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>完成一道清甜又帶有濃郁牛肉香的絲瓜牛肉</Text>
                            <Image source={require('../assets/Recipe/步驟/B6.webp')} style={{ width: '100%', height: 150 }} />
                        </View>
                    </View>

                </View>
            </ScrollView>


        </>
    );
}

export default MenuInfo;


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
})

