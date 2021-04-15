import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fonts } from 'react-native-elements/dist/config';



const Stack = createStackNavigator();

function Setting({ navigation }) {
    return (
        <>
            <View style={{ height: 40, backgroundColor: 'white' }} />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cell_fixed}>
                    {/* <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} /> */}
                </View>
                <View style={styles.cell}>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>偏好設定</Text>
                </View>
                <View style={{ width: 120, height: 40, backgroundColor: 'white', justifyContent: 'center' }}>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={styles.tytle}>
                    <Text>海鮮類</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>蝦子</Text>
                        <Text>海膽</Text>
                        <Text>龍蝦</Text>
                        <Text>石斑</Text>
                    </View>
                </View>
                <View style={styles.tytle}>
                    <Text>肉類</Text>
                </View>
                <View style={styles.tytle}>
                    <Text>蔬菜類</Text>
                </View>
                <View style={styles.tytle}>
                    <Text>家庭人數</Text>
                </View>
                <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.submitText}>登出</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Setting;


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
    tytle: {
        padding: 5,
        flex: 1,
    },
    submit: {
        paddingVertical:15,
        paddingHorizontal:30,
        marginBottom:20,
        backgroundColor: '#ff9933',
        borderRadius: 10,
    },
    submitText: {
        color: 'white',
        textAlign: 'center',
        fontSize:20,
    }
})

