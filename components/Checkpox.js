import React from 'react'
import { TouchableOpacity,  StyleSheet } from 'react-native'

function Checkpox(props){
const {handleOnChange,value, isChecked}=props

return(
<TouchableOpacity
onPress={()=>handleOnChange(value)}
style={[styles.checkbox,{backgroundColor:isChecked?'blue':'#fff'}]}/>
                         )
                        }

const styles = StyleSheet.create({
  checkbox: {
    width: 16,
    height: 26,
    borderRadius:'50%',
    borderColor:'blue',
    borderWidth:1}
    })

export default Checkpox