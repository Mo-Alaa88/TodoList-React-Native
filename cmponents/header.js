import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style ={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        height:100,
        marginTop: 200,
        paddingTop: 38,
        width:500,
        backgroundColor:'coral',
        // color:'white',
        // fontS ize: "xx-larg",
    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
    },

});