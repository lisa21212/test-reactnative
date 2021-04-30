import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, useState, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Materialicons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialCicons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import DateTimePicker from '@react-native-community/datetimepicker';

function FoodInfo({ navigation }) {
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <>
      <View style={{ height: 40, backgroundColor: 'white' }} />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.cell_fixed}>
          {/* <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} /> */}
        </View>

        <View style={styles.cell}>
          <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: '600' }}>蘋果</Text>
        </View>
        <View style={styles.cell_fixed}>
          {/* 右上按鈕空間 */}
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50 }}>
        <View style={styles.body_image}>
          <Image source={require('../assets/FridgeFood/apple.png')} style={{ height: 190, width: 190 }} />
        </View>

        <View style={styles.boxcontainer}>
          <View style={styles.textbox}>
            <Text style={{ fontSize: 20 }}>放入時間:</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 20 }}>2020/3/5</Text>
              <Entypo name="triangle-down" size={20} />
            </View>
          </View>
          <View style={styles.textbox}>
            <Text style={{ fontSize: 20 }}>建議保存期限:</Text>
            <Text style={{ fontSize: 20 }}>7 天</Text>
          </View>
        </View>

        <View style={styles.boxcontainer}>
          <View style={styles.textbox}>
            <Text style={{ fontSize: 20 }}>數量:</Text>
            <View style={{ flexDirection: 'row' }}>
              <Materialicons name="minus-circle-outline" size={25} color="#fd8728" style={{ paddingHorizontal: 5 }} onPress={() => navigation.navigate('Keep')} />
              <Text style={{ fontSize: 20 }}>2 個</Text>
              <MaterialCicons name="add-circle-outline" size={25} color="#fd8728" style={{ paddingHorizontal: 5 }} onPress={() => navigation.goBack()} />
            </View>

          </View>
          <View style={styles.textbox}>
            <Text style={{ fontSize: 20 }}>熱量評估:</Text>
            <Text style={{ fontSize: 20 }}>20 kcal</Text>
          </View>
        </View>
        <View>
          {/* <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )} */}
          
        </View>
        <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 30, borderRadius: 10, borderColor: 'grey', backgroundColor: '#ffa459', marginTop:40 }} onPress={() => navigation.goBack()}>
            <Text style={{ fontSize: 20 }}>確認</Text>
          </TouchableOpacity>
      </View>
    </>
  );
}



const styles = StyleSheet.create({
  cell_fixed: {
    width: 80,
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
  top_text: {
    fontSize: 15,
    textAlign: 'center',
  },
  body_image: {
    height: 275,
    width: 275,
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
  },
  boxcontainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 15,

  },

  textbox: {
    height: 130,
    width: 180,
    borderRadius: 50,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 5,
  },
})
export default FoodInfo;