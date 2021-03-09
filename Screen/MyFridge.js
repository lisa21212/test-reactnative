import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';




function MyFridge({ navigation }) {
    return (
        <>
            <View style={{ height: 40, backgroundColor: 'white' }} />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cell_fixed}>
                    <Button title="備忘錄" onPress={() => navigation.navigate('Keep')} />
                </View>
                <View style={styles.cell}>
                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '600' }}>我的冰箱</Text>
                </View>
                <View style={{ width: 120, height: 40, backgroundColor: 'white', justifyContent: 'center' }}>
                    <Button title="公告欄" onPress={() => navigation.navigate('MenuInfo')} />
                </View>
            </View>

            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
                    <Button title="肉類" onPress={() => navigation.navigate('MenuInfo')} />
                    <Button title="肉類" onPress={() => navigation.navigate('MenuInfo')} />
                    <Button title="肉類" onPress={() => navigation.navigate('MenuInfo')} />
                    <Button title="肉類" onPress={() => navigation.navigate('MenuInfo')} />
                    <Button title="肉類" onPress={() => navigation.navigate('MenuInfo')} />
                    <Button title="肉類" onPress={() => navigation.navigate('MenuInfo')} />
                </View>


                <View style={{ flex: 15, flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('FoodInfo')}>
                            <Image source={require('../assets/FridgeFood/apple.png')} style={{ height: 60, width: 60 }} />
                            <Text>數量</Text>
                            <Text>名稱
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Avocado')}>
                            <Image source={require('../assets/FridgeFood/avocado.jpeg')} style={{ height: 110, width: 120 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Pineapple')}>
                            <Image source={require('../assets/FridgeFood/pineapple.png')} style={{ height: 150, width: 150 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Strawberry')}>
                            <Image source={require('../assets/FridgeFood/strawberry.png')} style={{ height: 160, width: 160 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Guava')}>
                            <Image source={require('../assets/FridgeFood/guava.png')} style={{ height: 150, width: 150 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Grape')}>
                            <Image source={require('../assets/FridgeFood/grape.jpg')} style={{ height: 140, width: 140 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Banana')}>
                            <Image source={require('../assets/FridgeFood/banana.png')} style={{ height: 100, width: 120 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body_image} onPress={() => navigation.navigate('Orange')}>
                            <Image source={require('../assets/FridgeFood/orange.png')} style={{ height: 135, width: 135 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

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
    label_select: {
        backgroundColor: '#8c8c8c',
        borderWidth: 0.5,
        width: 60,
        height: 30,
        textAlign: 'center',
        borderRadius: 7,
        fontSize: 18,
    },
    label: {
        backgroundColor: '#e6e6e6',
        borderWidth: 0.5,
        width: 60,
        height: 30,
        textAlign: 'center',
        borderRadius: 7,
        fontSize: 18,
        justifyContent: 'center',
    },
    body_image: {
        height: 170,
        width: 170,
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lightgrey',
        margin: 5,
    },
})