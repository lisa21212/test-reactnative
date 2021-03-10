import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StyleSheet, TextInput, Image } from 'react-native';
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
                margin:10,
            }}>
                <TextInput placeholder="Search somthing to eat"
                    placeholderTextColor="black"
                    style={{
                        height: 40,
                        backgroundColor: '#cccccc',
                        fontSize:18,
                        margin:0.5,
                        padding:10,
                    }}>
                </TextInput>
                <Image source={require('../assets/search_black.png')} style={{ width: 25, height: 25, right: 15, position: 'absolute' }} />


            </View>
            <ScrollView>


                <View style={{ alignItems: 'center' ,marginTop:5}}>
                    <Text>推薦菜單頁面</Text>
                    <Button title="炒菠菜" onPress={() => navigation.navigate(Menu)} />
                </View>
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
})

