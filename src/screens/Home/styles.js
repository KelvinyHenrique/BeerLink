import React from 'react';
import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#FFF',
        backgroundColor:'#FFF',
    },
    BoxHeader:{
        marginTop:15,
        width:'90%',
        backgroundColor:'#BA0C2F',
        alignSelf:'center'
    },
    boxContainerBottom:{
        width:'100%',
        height:'90%',
        alignItems:'center',
        backgroundColor:'#FFF',
        borderTopLeftRadius:33,
        borderTopRightRadius:33,    
    },
    profilesTop:{
        width:'90%',
        height:100,
        alignItems:'center',
        alignSelf:'center',
        flexDirection:'row',    
        justifyContent:'space-between',
    },
    beerLinkText:{
        fontSize:30,
        fontWeight:'bold'
    },
    boxChat:{
        width:50,
        height:50,
        backgroundColor:'#FFF',
        borderRadius:30,
        alignItems: 'center',
        justifyContent:'center',
        elevation:5,
    },
    topContainer:{
        backgroundColor:'#BA0C2F',
        width:'100%',
        height:150,
        alignItems:'center',
        borderRadius:30,
        justifyContent:'center',
    },
    totalHours:{
        fontSize:30,
        fontWeight:'bold',
        color:'#FFF'
    },
    barHours:{
        fontSize:20,
        fontWeight:'bold',
        color:"#FFF"
    },

    btnBtn:{
        width:'90%',
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    btnTop:{
        backgroundColor:'#FFF',
        width:'45%',  
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
    },

});