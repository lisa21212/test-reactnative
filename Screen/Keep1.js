import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, Image, Input } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import BouncyCheckbox from "react-native-bouncy-checkbox";




function Keep({ navigation, route }) {
    const [checkboxState, setCheckboxState] = React.useState(false);
    const [checkList, setCheckList] = React.useState([]);

    React.useEffect(()=> {
        console.log('checkList', checkList)
    }, [checkList])

    function cb1(value) {
        const temp = [...checkList]
        

        const findIndex = checkList.findIndex(data=>data === value)


       if(findIndex > -1) {
           temp.splice(findIndex, 1)
       }else {
           temp.push(value)
       }


        setCheckList(temp)
    }


    return (
        <>
            <View style={{ height: 40, backgroundColor: 'white' }} />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cell_fixed}>
                    <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
                </View>
                <View style={styles.cell}>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>收藏食譜</Text>
                </View>
                <View style={styles.cell_fixed}>
                    {/* 右上按鈕空間 */}
                </View>
            </View>

            <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
                <Button title="中式" />
                <Button title="日式" />
                <Button title="雞肉" />
                <Button title="家常" />
                <Button title="•••" onPress={() => navigation.navigate('MenuInfo')} />
            </View>

            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Pineapple')}>

                        <View style={{ flexDirection: 'row' }}>
                            
                            <BouncyCheckbox
                                size={25}
                                style={{ marginTop: 16 }}
                                text="Custom Checkbox"
                                isChecked={checkList.includes('test')}
                                onPress={() => cb1('test')}
                            />
                            <Text style={styles.textinbox}>
                                豬肋排
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <BouncyCheckbox
                                style={{ marginTop: 16 }}
                                isChecked={checkboxState}
                                text="蝦子"
                                isChecked={checkList.includes('shrimp')}
                                onPress={() => cb1('shrimp')}

                            />
                            <Text style={styles.textinbox}>
                                醬燒
                            </Text>
                        </View>



                        <Ionicons name="trash-outline" size={35} color="black" style={{ flex: 0.7 }} onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Strawberry')}>
                        <Image source={require('../assets/Recipe/海鮮羹.jpg')} style={styles.imageposition} />
                        <Text style={styles.textinbox}>
                            海鮮羹
                            </Text>
                        <Ionicons name="trash-outline" size={35} color="black" style={{ flex: 0.7 }} onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Strawberry')}>
                        <Image source={require('../assets/Recipe/清蒸石斑.jpg')} style={styles.imageposition} />
                        <Text style={styles.textinbox}>
                            醬燒豬肋排
                            </Text>
                        <Ionicons name="trash-outline" size={35} color="black" style={{ flex: 0.7 }} onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Strawberry')}>
                        <Image source={require('../assets/Recipe/水煮牛.jpg')} style={styles.imageposition} />
                        <Text style={styles.textinbox}>
                            重慶水煮牛
                            </Text>
                        <Ionicons name="trash-outline" size={35} color="black" style={{ flex: 0.7 }} onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Strawberry')}>
                        <Image source={require('../assets/Recipe/炒飯.jpg')} style={styles.imageposition} />
                        <Text style={styles.textinbox}>
                            蛋炒飯
                            </Text>
                        <Ionicons name="trash-outline" size={35} color="black" style={{ flex: 0.7 }} onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Strawberry')}>
                        <Image source={require('../assets/Recipe/海參.jpg')} style={styles.imageposition} />
                        <Text style={styles.textinbox}>
                            海參煲
                            </Text>
                        <Ionicons name="trash-outline" size={35} color="black" style={{ flex: 0.7 }} onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imagebox} onPress={() => navigation.navigate('Strawberry')}>
                        <Image source={require('../assets/Recipe/砂鍋雞.jpg')} style={styles.imageposition} />
                        <Text style={styles.textinbox}>
                            砂鍋雞
                            </Text>
                        <Ionicons name="trash-outline" size={35} color="black" style={{ flex: 0.7 }} onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                </View>
            </ScrollView>

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
        width: '90%',
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        borderColor: 'lightgrey',
        margin: 5,
        flexDirection: 'column'
    },
    imageposition: {
        flex: 2,
        height: 120,
        width: 120,
        marginLeft: 30,
        borderRadius: 20
    },
    textinbox: {
        textAlign: 'center',
        fontSize: 15,
    },
})