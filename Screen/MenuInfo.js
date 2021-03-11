import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

function MenuInfo({ navigation }) {
    return (
        <>
            {/* <View style={{ height: 40, backgroundColor: 'white' }} />
      <View style={{ flexDirection: 'row' }}>
          <View style={styles.cell_fixed}>
          <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.cell}>
              <Text style={{ fontSize: 20, textAlign: 'center' }}>絲瓜炒牛肉</Text>
          </View>
          <View style={{width: 120,height: 40,backgroundColor: 'white', justifyContent: 'center'}}>
          </View>
      </View> */}
            <ScrollView>
                <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10, marginTop: 40 }} onPress={() => navigation.goBack()}>

                </Ionicons>
                <View>
                    <Image source={require('../assets/Recipe/絲瓜炒牛肉.jpg')} style={{ width: '100%', height: 200 }}></Image>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={{flexDirection:'row',alignItems:'center', marginTop:20}}>
                            <Text style={{ fontSize: 30, fontWeight: '600'}}>絲瓜炒牛肉</Text>
                            <View style={{ height: 40, width: 100, borderRadius: 15, backgroundColor: 'lightgrey', justifyContent:'center', alignItems:'center', marginLeft:10}}>
                                <Text style={{fontSize:18,fontWeight:'400'}}>10~15 分</Text>
                            </View>
                            <View style={{ height: 40, width: 100, borderRadius: 15, backgroundColor: 'lightgrey', justifyContent:'center', alignItems:'center', marginLeft:10}}>
                                <Text style={{fontSize:18,fontWeight:'400'}}>3~4 人</Text>
                            </View>
                        </View>
                        <Text style={{ marginTop: 20, fontSize: 16, lineHeight: 20}}>簡介:</Text>
                        <Text style={{fontSize: 16, lineHeight: 20, borderWidth:2, borderColor:'black'}}>絲瓜的清甜搭配牛肉的風味，不僅是一道菜，醬汁也非常下飯。</Text>

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

