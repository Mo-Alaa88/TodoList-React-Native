import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons ,AntDesign } from '@expo/vector-icons'; 

export default function TodoItem ({item, pressHandler}){
    return(
        
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.item}>
                {/* https://docs.expo.io/guides/icons/?redirected */}
                {/* https://icons.expo.fyi/ */}
                <MaterialIcons name="delete" size={24} color="black" />
                <Text style={styles.itemText}>{item.text}</Text>
                <AntDesign name="google" size={24} color="black" />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item:{
        padding:16,
        margin:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        textAlign:'center',
        flexDirection:'row',
        
    },
    itemText:{
        marginLeft:10,

    }
})