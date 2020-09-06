import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export default function ListItem({item,deleteitem}) {
    return (
        <TouchableOpacity style={styles.listitem}>
            <View style={styles.listitemview}>
                <Text style={styles.listitemtext}>{item.text}</Text>    
                <Icon name="remove" size={20} color="firebrick" onPress={()=> deleteitem(item.id) } />
            </View>    
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    listitem:{
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderColor:'#eee'
    },
    listitemview:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center'
    },
    listitemtext:{
        fontSize:18
    }
})