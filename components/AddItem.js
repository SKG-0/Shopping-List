import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export default function AddItem({title,additem}) {
    const [text,settext]=useState('');
    const onchange=(textvalue)=> settext(textvalue)
    return (
        <View>
            <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onchange} />
            <TouchableOpacity style={styles.btn} onPress={()=> additem(text)}>
                <Text style={styles.btntext}><Icon name="plus" size={20} /> Add Item</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    input:{
        height:60,
        padding:8,
        fontSize:16
    },
    btn:{
        backgroundColor:'#c2bad8',
        padding:9,
        margin:5
    },
    btntext:{
        color:'darkslateblue',
        fontSize:20,
        textAlign:'center'
    }
})