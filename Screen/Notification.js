import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StyleSheet, FlatList, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Stack = createStackNavigator();

function Notification({ navigation }) {
    const data = [
        { conversation: "冰箱中的蘋果即將過期", date: "2021-03-16" },
        { conversation: "留言板中有一則新的留言", date: "2021-03-17" },
    ]
    const [text, onChangeText] = React.useState("Useless Text");

    const renderItem = ({ item, i }) => (
        <View style={styles.conversations}>
            <MaterialCommunityIcons name="bell" size={25} color="orange" style={{justifyContent:'center', padding:15}}/>
            <Text style={{ alignSelf: 'center', justifyContent: 'center', flex: 2, fontSize: 16, marginLeft: 10 }}>{item.conversation}</Text>
            <Text style={{ alignSelf: 'center', justifyContent: 'center', flex: 1, fontSize: 16 }}>{item.date}</Text>
        </View>

    );

    return (
        <>
            {/* Header */}
            <View style={{ height: 40, backgroundColor: 'white' }} />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cell_fixed}>
                    {/* <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} /> */}
                </View>

                <View style={styles.cell}>
                    <Text style={{ fontSize: 25, textAlign: 'center' }}>通知</Text>
                </View>
                <View style={styles.cell_fixed}>
                    {/* 右上按鈕空間 */}
                </View>
            </View>

            <View style={{ flex: 0.5, justifyContent: 'flex-start' }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.conversation}
                    style={{ padding: 5 }}
                >
                </FlatList>
            </View>
        </>
    );
}

export default Notification;


const styles = StyleSheet.create({
    body_image: {
        height: 300,
        width: 400,
        borderWidth: 2,
        backgroundColor: 'grey',
    },
    cell_fixed: {
        width: 80,
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    cell: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    conversations: {
        backgroundColor: 'white',
        height: 50,
        margin: 8,
        marginTop: 10,
        borderRadius: 8,
        flexDirection: 'row',
        
    }
})

