import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

function Notification({ navigation }) {
    return (
      <>
      <View style={{ height: 40, backgroundColor: 'white' }} />
      <View style={{ flexDirection: 'row' }}>
          <View style={styles.cell}>
              <Text style={{ fontSize: 20, textAlign: 'center' }}>通知</Text>
          </View>
          </View>
      <View style={{ flex: 2,justifyContent: 'flex-start',alignItems: 'center',backgroundColor: 'white'  }} >   
      <View style={styles.body_image} >
        <View style={{ flexDirection: 'row',  alignContent: 'space-between'}}>
            <Ionicons name="notifications" size={30} color="black" alignItems='left' >
            <Text style={{ fontSize: 20, textAlign: 'left',marginTop: 270 }}>蘋果即將於三天內到期    今天18:30</Text></Ionicons>
        </View>
        <View style={{ flexDirection: 'row',  alignContent: 'space-between'}}>
            <Ionicons name="notifications" size={30} color="black" alignItems='left' >
            <Text style={{ fontSize: 20, textAlign: 'left',marginTop: 270 }}>菠菜即將於三天內到期    今天18:40</Text></Ionicons>
        </View>
        <View style={{ flexDirection: 'row',  alignContent: 'space-between'}}>
            <Ionicons name="notifications" size={30} color="black" alignItems='left' >
            <Text style={{ fontSize: 20, textAlign: 'left',marginTop: 270 }}>公告欄訊息已更新             三天前</Text></Ionicons>
        </View>
        
        
        </View>
        </View>
        
    </>
    );
  }

  export default Notification;


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
        flex: 2,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
})

