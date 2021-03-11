import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, Image, TouchableOpacity, Component } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Materialicons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler';

const DATA =[{name: '絲瓜炒牛肉'},{name: '醬燒豬肋排'},{name: '海鮮羹'},{name: '清蒸鮮石斑'}]




function Menu({ navigation }) {

    const [heart, setHeart ] = useState(false)

    return (
        <>
            <View style={{ height: 40, backgroundColor: 'white' }} />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cell_fixed}>
                    <Ionicons name="ios-add" size={40} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
                </View>
                <View style={styles.cell}>
                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight:'600' }}>推薦菜單</Text>
                </View>
                <View style={{ width: 120, height: 40, backgroundColor: 'white', justifyContent: 'center' }}>
                    <Materialicons name="favorite-outline" size={30} color="black" style={{ alignSelf: 'flex-end', marginRight: 15 }} onPress={() => navigation.navigate('Keep')} />
                </View>
            </View>

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


            <View>
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Pineapple')}>
                            <Ionicons name="settings-outline" size={20} color="black" style={styles.setting_icon} />
                            <Image source={require('../assets/Recipe/豬肋排.jpg')} style={styles.image_style} />
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ marginTop: 10 }}>醬燒豬肋排</Text>
                                <Text>熱量: 555 kal</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Ionicons name="settings-outline" size={20} color="black" style={styles.setting_icon} />
                            <Image source={require('../assets/Recipe/海鮮羹.jpg')} style={styles.image_style} />
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ marginTop: 10 }}>海鮮羹</Text>
                                <Text>熱量: 456 kal</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Ionicons name="settings-outline" size={20} color="black" style={styles.setting_icon} />
                            <Image source={require('../assets/Recipe/炒飯.jpg')} style={styles.image_style} />
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ marginTop: 10 }}>蝦仁蛋炒飯</Text>
                                <Text>熱量: 430 kal</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Ionicons name="settings-outline" size={20} color="black" style={styles.setting_icon} />
                            <Image source={require('../assets/Recipe/海參.jpg')} style={styles.image_style} />
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ marginTop: 10 }}>精華海參煲</Text>
                                <Text>熱量: 510 kal</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Ionicons name="settings-outline" size={20} color="black" style={styles.setting_icon} />
                            <Image source={require('../assets/Recipe/砂鍋雞.jpg')} style={styles.image_style} />
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ marginTop: 10 }}>主廚砂鍋雞</Text>
                                <Text>熱量: 420 kal</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Ionicons name="settings-outline" size={20} color="black" style={styles.setting_icon} />
                            <Image source={require('../assets/Recipe/水煮牛.jpg')} style={styles.image_style} />
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ marginTop: 10 }}>重慶水煮牛</Text>
                                <Text>熱量: 450 kal</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            <View style={{ flex: 1, marginTop: 10 }}>
                <ScrollView>
                    <Text style={{fontSize:25, fontWeight:'600',marginLeft:30}}>其他食譜</Text>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Pineapple')}>
                            <Image source={require('../assets/Recipe/絲瓜炒牛肉.jpg')} style={styles.imageposition} />
                            <View style={styles.textinbox}>
                            <Text>
                                絲瓜炒牛肉{'\n'}
                            </Text>
                            <Text>
                                食材: 絲瓜、牛肉、紅蘿蔔、猴頭菇、鹽、青蔥段
                            </Text>
                            </View>
                            <Materialicons onPress={()=>setHeart(!heart)} name={ heart ? 'favorite' : 'favorite-outline'} size={35} style={{ flex: 0.7, color:'red' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Pineapple')}>
                            <Image source={require('../assets/Recipe/豬肋排.jpg')} style={styles.imageposition} />
                            <View style={styles.textinbox}>
                            <Text>
                            醬燒豬肋排{'\n'}
                            </Text>
                            <Text>
                                食材: 豬肋排、醬油、花椰菜
                            </Text>
                            </View>
                            <Materialicons onPress={()=>setHeart(!heart)} name={ heart ? 'favorite' : 'favorite-outline'} size={35} style={{ flex: 0.7, color:'red' }}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Strawberry')}>
                            <Image source={require('../assets/Recipe/海鮮羹.jpg')} style={styles.imageposition} />
                            <View style={styles.textinbox}>
                            <Text>
                            海鮮羹{'\n'}
                            </Text>
                            <Text>
                                食材: 蝦仁、花枝、蟹腿肉、金針菇、干貝、烏醋
                            </Text>
                            </View>
                            <Materialicons name="favorite-outline" size={35} color="red" style={{ flex: 0.7 }} onPress={() => navigation.goBack()} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Strawberry')}>
                            <Image source={require('../assets/Recipe/清蒸石斑.jpg')} style={styles.imageposition} />
                            <View style={styles.textinbox}>
                            <Text>
                            清蒸鮮石斑{'\n'}
                            </Text>
                            <Text>
                            食材: 石斑魚、青蔥、薑
                            </Text>
                            </View>
                            <Materialicons name="favorite-outline" size={35} color="red" style={{ flex: 0.7 }} onPress={() => navigation.goBack()} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Strawberry')}>
                            <Image source={require('../assets/Recipe/水煮牛.jpg')} style={styles.imageposition} />
                            <View style={styles.textinbox}>
                            <Text>
                            重慶水煮牛{'\n'}
                            </Text>
                            <Text>
                            食材: 牛肉、豆芽菜
                            </Text>
                            </View>
                            <Materialicons name="favorite-outline" size={35} color="red" style={{ flex: 0.7 }} onPress={() => navigation.goBack()} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Strawberry')}>
                            <Image source={require('../assets/Recipe/炒飯.jpg')} style={styles.imageposition} />
                            <Text style={styles.textinbox}>
                                蛋炒飯
                            </Text>
                            <Materialicons name="favorite-outline" size={35} color="red" style={{ flex: 0.7 }} onPress={() => navigation.goBack()} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Strawberry')}>
                            <Image source={require('../assets/Recipe/海參.jpg')} style={styles.imageposition} />
                            <Text style={styles.textinbox}>
                                海參煲
                            </Text>
                            <Materialicons name="favorite-outline" size={35} color="red" style={{ flex: 0.7 }} onPress={() => navigation.goBack()} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Strawberry')}>
                            <Image source={require('../assets/Recipe/砂鍋雞.jpg')} style={styles.imageposition} />
                            <Text style={styles.textinbox}>
                                砂鍋雞
                            </Text>
                            <Materialicons name="favorite-outline" size={35} color="red" style={{ flex: 0.7 }} onPress={() => navigation.goBack()} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
        height: 220,
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
        justifyContent: 'flex-start',
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
        margin:10,
    },
})

