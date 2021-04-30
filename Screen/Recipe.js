import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet,Button,Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Recipe({ navigation }) {
    return (
      <>
        <View style={{ height: 40, backgroundColor: 'white' }} />
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.cell_fixed}>
          <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
          </View>
  
          <View style={styles.cell}>
            <Text style={{ fontSize: 25, textAlign: 'center' }}>自建食譜</Text>
          </View>
          <View style={styles.cell_fixed}>
            {/* 右上按鈕空間 */}
          </View>
        </View>
  
        <View style={{ flex: 1,justifyContent: 'flex-start', alignItems: 'center'  }}>
        <Image style={styles.center} source={require('../assets/download.jpg')} />
        <View style={styles.body_image}>
        <Text style={{ fontSize: 20, textAlign: 'center'}}>菜名:</Text>
        
        <Text style={{ fontSize: 20, textAlign: 'center'}}>步驟:</Text>
        
        <Text style={{ fontSize: 20, textAlign: 'center'}}>食材:</Text>
        <Text style={{ fontSize: 20, textAlign: 'center'}}>食材:</Text>
        <Text style={{ fontSize: 20, textAlign: 'center'}}>食材:</Text>
        <Text style={{ fontSize: 20, textAlign: 'center'}}>份量:</Text>
        <Button title="新增" onPress={() => navigation.navigate('')} />
        <Button title="刪除" onPress={() => navigation.navigate('')} />
        </View>
        </View>
        
        

      </>
    );
  }
  export default Recipe;
  const styles = StyleSheet.create({
      body_image: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 40,
        margin: 5,
        borderRadius: 9,
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
    })