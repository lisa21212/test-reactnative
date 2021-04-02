import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet,Button, FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Board({ navigation }) {
  const data =[
    {conversation:"今晚我想來點炒菠菜", date:"2021-03-16"},
    {conversation:"今晚我想來點麻婆豆腐", date:"2021-03-17"},
  ]
  const renderItem = ({ item, i }) => (
    <View style={styles.conversations}>
      <Text>{item.conversation} {item.date}</Text>
    </View>
  
  );
    return (
      <>
        <View style={{ height: 40, backgroundColor: 'white' }} />
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.cell_fixed}>
          <Ionicons name="chevron-back" size={30} color="black" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
          </View>
  
          <View style={styles.cell}>
            <Text style={{ fontSize: 25, textAlign: 'center' }}>公告欄</Text>
          </View>
          <View style={styles.cell_fixed}>
            {/* 右上按鈕空間 */}
          </View>
        </View>
  
        <View style={{flex: 0.5, justifyContent: 'flex-start', backgroundColor: 'grey'}}>
            <FlatList 
              data={data} 
              renderItem = {renderItem}
              keyExtractor={item => item.conversation}
              >
            </FlatList>
            <Text style={{ fontSize: 20, textAlign: 'center',marginRight:300}}>留言...</Text>
          {/* <View style={styles.body_image}>
            <FlatList 
              data={data} 
              renderItem = {renderItem}
              keyExtractor={item => item.conversation}
              >
            </FlatList>
            <Text style={{ fontSize: 20, textAlign: 'center',marginTop: 270 ,marginRight:300}}>留言...</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' ,marginRight:300}}>留言...</Text>
          </View> */}
        </View>
        
        

      </>
    );
  }

  const styles = StyleSheet.create({
      body_image: {
        height: 300, 
        width: 400, 
        borderWidth: 2, 
        backgroundColor: 'grey',
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
      conversations: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 40,
        margin: 5,
        borderRadius: 9,
      }
    })
    export default Board;