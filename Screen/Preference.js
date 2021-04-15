import 'react-native-gesture-handler';
import React,{ useState }  from 'react'
import { TouchableOpacity,StyleSheet, View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Checkpox from '../components/Checkpox'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import { getStatusBarHeight } from 'react-native-status-bar-height'





const Preference = ({ navigation }) =>{
    return (
    <Background>
     <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Habbit')} >
          <Text style={styles.check}>上一頁
       </Text>
        </TouchableOpacity>
      </View>
        <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => navigation.navigate('People')}>
          <Text style={styles.check}>下一頁
        </Text>
        </TouchableOpacity>
</View>
    <Header>偏好設定</Header>
    <View style={styles.container3}>
    <Text style={styles.row}>海鮮</Text>
  </View>
<View style={styles.cc}>
    <Text style={styles.Singin}>  蝦子      </Text>
    <Text style={styles.Singin}>  生魚      </Text>
    <Text style={styles.Singin}>  海膽      </Text>
    <Text style={styles.Singin}>  石斑      </Text>
</View>
 <View style={styles.container3}>
    <Text style={styles.row}>肉類</Text>
  </View>
<View style={styles.cc}>
    <Text style={styles.Singin}>  牛肉      </Text>
    <Text style={styles.Singin}>  豬肉      </Text>
    <Text style={styles.Singin}>  羊肉      </Text>
    <Text style={styles.Singin}>  雞肉      </Text>
</View>
<View style={styles.container3}>
    <Text style={styles.row}>菜類</Text>
  </View>
<View style={styles.cc}>
    <Text style={styles.Singin}>  花椰菜      </Text>
    <Text style={styles.Singin}>  大陸妹      </Text>
    <Text style={styles.Singin}>  地瓜葉      </Text>
    <Text style={styles.Singin}>  番茄      </Text>
</View>
    <View style={styles.container3}>
    <Text style={styles.row}>家庭人數</Text>
  </View>
<View style={styles.cc}>
    <Text style={styles.Singin}>一位      </Text>
    <Text style={styles.Singin}>二位      </Text>
    <Text style={styles.Singin}>三位      </Text>
    <Text style={styles.Singin}>四位      </Text>
    <Text style={styles.Singin}>五位      </Text>
</View>
<View style={styles.container3}>
    <Text style={styles.row}>店家偏好設定</Text>
  </View>
 <View style={styles.cc}>
    <Text style={styles.Singin}>頂好      </Text>
    <Text style={styles.Singin}>家樂福      </Text>
</View>
<Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
        style={{ marginTop: 6,backgroundColor: 'orange', }}>
        登出
      </Button>
  </Background>
)
}

const styles = StyleSheet.create({
    Singin: {
    fontSize: 17,
    flex: 1,
    flexDirection: 'row',
    color: theme.colors.secondary,
    padding: 5,
    },
    container3: {
    flex: 1,
    padding: 10,
  },
  row: {
    padding: 4,
    borderBottomColor: "grey",
    alignItems: 'flex-start',
    fontSize: 18,
    borderBottomWidth: StyleSheet.hairlineWidth}
    ,
    cc: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent:'space-between',
    },
    check: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.colors.primary,
  },
    container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
    container1: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    right: 4,
  },
   
    
      
}

)
                                 
export default Preference
