import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button,StyleSheet} from 'react-native';




function MyFridge({ navigation }) {
    return (
      <>
      <View style={{ height: 40, backgroundColor: 'white' }} />
      <View style={{ flexDirection: 'row' }}>
          <View style={styles.cell_fixed}>
          <Button title="備忘錄" onPress={() => navigation.navigate('MenuInfo')} />
          </View>
          <View style={styles.cell}>
              <Text style={{ fontSize: 20, textAlign: 'center' }}>我的冰箱</Text>
          </View>
          <View style={{width: 120,height: 40,backgroundColor: 'white', justifyContent: 'center'}}>
              <Button title="公告欄" onPress={() => navigation.navigate('MenuInfo')} />
          </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyFridge page</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
})