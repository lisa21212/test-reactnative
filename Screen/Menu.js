import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Materialicons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler';




function Menu({ navigation }) {

    return (
        <>
            <View style={{ height: 40, backgroundColor: 'white' }} />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cell_fixed}>
                    <Ionicons name="ios-add" size={40} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
                </View>
                <View style={styles.cell}>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>推薦菜單</Text>
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


            <ScrollView>
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Pineapple')}>
                            <Image source={require('../assets/Recipe/豬肋排.jpg')} style={{ height: 120, width: 120, borderRadius: 30 }} />
                            <Text>番茄義大利麵佐大鮮蝦</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Image source={require('../assets/Recipe/海鮮羹.jpg')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Image source={require('../assets/Recipe/炒飯.jpg')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Image source={require('../assets/Recipe/海參.jpg')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Image source={require('../assets/Recipe/砂鍋雞.jpg')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Image source={require('../assets/Recipe/水煮牛.jpg')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Image source={require('../assets/FridgeFood/strawberry.png')} style={{ height: 80, width: 80 }} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ScrollView>

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
})

