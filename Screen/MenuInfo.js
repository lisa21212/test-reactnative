import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StyleSheet, Image, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

function MenuInfo({ navigation, route }) {

    const { item } = route.params
    console.log('item', item);
    let ingre = item.ingre;
    let ingreArr = ingre.split('、');
    // console.log('ingre', ingreArr);




    return (
        <>

            <View style={{ height: 40, backgroundColor: 'white' }} />
            <View style={{ zIndex: 100, height: 40, width: 40, backgroundColor: 'white', borderRadius: 20, position: 'absolute', top: 50, left: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="chevron-back" size={30} color="black" onPress={() => navigation.goBack()} />
            </View>

            <ScrollView>
                <View>
                    <Image source={item.url} style={{ width: '100%', height: 200 }}>
                    </Image>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, flex: 1 }}>
                            <Text style={{ fontSize: 30, fontWeight: '600' }}>{item.Name}</Text>
                            <View style={{ height: 40, width: 100, borderRadius: 15, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: '400' }}>{item.time} 分</Text>
                            </View>
                            <View style={{ height: 40, width: 100, borderRadius: 15, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: '400' }}>{item.people} 人</Text>
                            </View>
                        </View>

                        {/* 以下為簡介區 */}
                        <View>
                            <Text style={{ marginTop: 20, fontSize: 20, lineHeight: 20 }}>簡介:</Text>
                            <View style={{ width: '100%', height: 2, backgroundColor: '#000', marginVertical: 4 }} />
                            <Text style={{ fontSize: 16, lineHeight: 20 }}>{item.desc}</Text>

                            <Text style={{ marginTop: 30, fontSize: 20, lineHeight: 20 }}>食材:</Text>
                            <View style={{ width: '100%', height: 2, backgroundColor: '#000', marginVertical: 4 }} />

                            <View style={{ flexDirection: 'row', marginVertical: 4 }}>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>絲瓜</Text>
                                    <View style={{ alignItems: 'flex-end', flex: 1, marginHorizontal: 20 }}>
                                        <Ionicons name="checkmark" size={30} color="green" />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>牛肉</Text>
                                    <View style={{ alignItems: 'flex-end', flex: 1, marginHorizontal: 20 }}>
                                        <Ionicons name="checkmark" size={30} color="green" />
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginVertical: 4 }}>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>紅蘿蔔</Text>
                                    <View style={{ alignItems: 'flex-end', flex: 1, marginHorizontal: 20 }}>
                                        <Ionicons name="checkmark" size={30} color="green" />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>青蔥段</Text>
                                    <View style={{ alignItems: 'flex-end', flex: 1, marginHorizontal: 20 }}>
                                        <Ionicons name="close" size={30} color="red" />
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginVertical: 4 }}>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>猴頭菇</Text>
                                    <View style={{ alignItems: 'flex-end', flex: 1, marginHorizontal: 20 }}>
                                        <Ionicons name="close" size={30} color="red" />
                                    </View>
                                </View>
                                <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}></Text>
                            </View>


                            <Text style={{ marginTop: 30, fontSize: 20, lineHeight: 20 }}>調味料:</Text>
                            <View style={{ width: '100%', height: 2, backgroundColor: '#000', marginVertical: 4 }} />
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>醬油</Text>
                                <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>油</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>鹽</Text>
                                <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}></Text>
                            </View>
                        </View>


                        {/* 以下為步驟區 */}
                        <View>
                            <Text style={{ marginTop: 30, fontSize: 16, lineHeight: 20 }}>步驟:</Text>
                            <View style={{ width: '100%', height: 2, backgroundColor: '#000', marginVertical: 4 }} />
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>1. </Text>
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>絲瓜去皮，切小塊。切少許蒜片、薑絲、蔥白備用</Text>
                            <Image source={require('../assets/Recipe/步驟/B1.webp')} style={{ width: '100%', height: 150 }} />
                            <View style={{ width: '100%', height: 1, backgroundColor: '#999999', marginVertical: 4 }} />
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>2. </Text>
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>先爆香蒜片和薑絲後，將處理好的絲瓜塊入鍋拌炒。
                        拌炒的過程中加入調味粉，一點水加速軟化（水不必太多，絲瓜軟化後會出很多水）</Text>
                            <Image source={require('../assets/Recipe/步驟/B2.webp')} style={{ width: '100%', height: 150 }} />
                            <View style={{ width: '100%', height: 1, backgroundColor: '#999999', marginVertical: 4 }} />
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>3. </Text>
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>絲瓜軟後先從鍋中取出，再將調味好的牛肉稍微拌炒（3分熟度即可）</Text>
                            <Image source={require('../assets/Recipe/步驟/B3.webp')} style={{ width: '100%', height: 150 }} />
                            <View style={{ width: '100%', height: 1, backgroundColor: '#999999', marginVertical: 4 }} />
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>4. </Text>
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>再將原先的絲瓜倒入鍋中，和牛肉一起拌炒</Text>
                            <Image source={require('../assets/Recipe/步驟/B4.webp')} style={{ width: '100%', height: 150 }} />
                            <View style={{ width: '100%', height: 1, backgroundColor: '#999999', marginVertical: 4 }} />
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>5. </Text>
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>燒入味後再加入預先切好的蔥，即可起鍋</Text>
                            <Image source={require('../assets/Recipe/步驟/B5.webp')} style={{ width: '100%', height: 150 }} />
                            <View style={{ width: '100%', height: 1, backgroundColor: '#999999', marginVertical: 4 }} />
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>6. </Text>
                            <Text style={{ fontSize: 16, lineHeight: 20, flex: 1 }}>完成一道清甜又帶有濃郁牛肉香的絲瓜牛肉</Text>
                            <Image source={require('../assets/Recipe/步驟/B6.webp')} style={{ width: '100%', height: 150 }} />
                        </View>
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

