import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Food({ navigation }) {
    return (
      <>
        <View style={{ height: 40, backgroundColor: 'white' }} />
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.cell_fixed}>
          <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
          </View>
  
          <View style={styles.cell}>
            <Text style={{ fontSize: 25, textAlign: 'center' }}>食材備忘錄</Text>
          </View>
          <View style={styles.cell_fixed}>
            {/* 右上按鈕空間 */}
          </View>
        </View>
  
        <View style={{ flex: 1,justifyContent: 'flex-start', alignItems: 'center'  }}>
        <View style={styles.body_image}>
        <Text style={{ fontSize: 20, textAlign: 'center'}}>蒜頭</Text>
        <Ionicons name="ios-cart" size={30} color="black" style={{ marginLeft: 10 }} />
        <Text style={{ fontSize: 20, textAlign: 'center'}}>蘋果</Text>
        <Ionicons name="ios-cart" size={30} color="black" style={{ marginLeft: 10 }} />
        <Text style={{ fontSize: 20, textAlign: 'center'}}>豆腐</Text>
        <Ionicons name="ios-cart" size={30} color="black" style={{ marginLeft: 10 }} />
        </View>
        </View>
        
        

      </>
    );
  }
  export default Food;
  const styles = StyleSheet.create({
      body_image: {
        height: 300, 
        width: 400, 
        borderWidth: 2, 
        backgroundColor: 'white',
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
    