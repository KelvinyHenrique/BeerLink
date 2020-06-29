import React from 'react';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#BA0C2F',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    BoxContent:{
        width:'87%',
        height:'55%',
    },
    boxHello:{
       width:'100%',
       height:120,
       alignItems:'flex-start',
       justifyContent:'space-around'
    },
    welcome:{
        fontSize:38,
        color:'#FFF',
        fontWeight:'bold'
    },
    title:{
        color:'#fff',
        fontSize:19,
    },
    subtitle:{
        color:'#FFF',
        fontSize:19,
        fontWeight:'bold',
    },
    boxButons:{
        width:'100%',
        height:200,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },
    btnsigninGoogle:{
        width:'100%',
        height:45,
        borderRadius:13,
        backgroundColor:'#FFF',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
    },
    goToLogin:{
        fontSize:19,
        fontWeight:'500',
        color:'#BA0C2F',
    },  

    btncreateAccount:{
        width:'100%',
        height:45,
        borderWidth:2,
        borderColor:'#fff',
        borderRadius:13,
        marginTop:15,
        alignItems:'center',
        justifyContent:'center'
    },
    btnTextcreateAccount:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:19,
    },
    loginConvenc:{
        color:'#7B0019',
        fontSize:17,
        fontWeight:'bold'
    },

    entrar:{
        fontWeight:'bold',
        fontSize:17,
        color:'#FFF'
    },  

});