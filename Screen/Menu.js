import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
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
                    <Materialicons name="favorite-outline" size={30} color="black" style={{ alignSelf:'flex-end', marginRight:15 }} onPress={() => navigation.navigate('Keep')} />
                </View>
            </View>
            <View>

            </View>

            <ScrollView>
                <View style={{alignItems: 'center' }}>
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

