import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';




function MyFridge({ navigation }) {
    return (
        <>
            <View style={{ height: 40, backgroundColor: 'white' }} />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cell_fixed}>
                    <Button title="備忘錄" onPress={() => navigation.navigate('MenuInfo')} />
                </View>
                <View style={styles.cell}>
                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '600' }}>我的冰箱</Text>
                </View>
                <View style={{ width: 120, height: 40, backgroundColor: 'white', justifyContent: 'center' }}>
                    <Button title="公告欄" onPress={() => navigation.navigate('MenuInfo')} />
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
                <Button title="肉類" onPress={() => navigation.navigate('MenuInfo')}/>

            </View>
            <View style={{ flex: 15, justifyContent: 'center', alignItems: 'center' }}>
                <Text>MyFridge page</Text>
                <Button title="蘋果" onPress={() => navigation.navigate('FoodInfo')} />
            </View>
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
})