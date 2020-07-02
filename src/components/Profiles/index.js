import React, { useRef, useEffect, useState } from 'react';
import styles from './styles';
import { View, Animated, Dimensions, Easing, Text } from 'react-native';
import Albert from '../../assets/albert.svg';


function FullChat(props) {

    return (
        <View style={styles.container}>
            <Albert width={60} height={60}/>
            <Text style={{fontSize:17, marginLeft:19, marginRight:19, marginTop:5, marginBottom:5 ,fontWeight:'bold', color:'#7E7E7E'}}>{props.name}</Text>
        </View>
    );
}


export default FullChat;