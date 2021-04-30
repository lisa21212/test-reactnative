import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button,StyleSheet,Header} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BouncyCheckbox from "react-native-bouncy-checkbox";







function Stores({ navigation }) {

  return (
    <>
    <View style={{ height: 40, backgroundColor: 'white' }} />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cell_fixed}>
                    <Button title="上一頁" onPress={() => navigation.navigate('Memo')} />
                </View>
                <View style={styles.cell}>
                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '600' }}>店家偏好設定</Text>
                </View>
                <View style={{ width: 120, height: 40, backgroundColor: 'white', justifyContent: 'center' }}>
                    <Button title="下一頁" onPress={() => navigation.navigate('Board')} />
                </View>
            </View>
            <View style={{alignSelf:'center'}}>
              <View style={{flexDirection:'row',paddingVertical:20}}>
              <BouncyCheckbox onPress={(isChecked: false) => {}} />
              <Text>頂好</Text>

              </View>
              <View style={{flexDirection:'row'}}>
              <BouncyCheckbox onPress={(isChecked: false) => {}} />
              <Text>家樂福</Text>

              </View>
                    
    
                </View>

  </>
  );
}

export default Stores;


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
  body_image: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
   image_a: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
})
                                 

