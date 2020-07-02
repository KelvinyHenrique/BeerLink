import React, { useRef, useEffect, useState } from 'react';
import styles from './styles';
import { View, Animated, Dimensions, Easing, Text } from 'react-native';
import Albert from '../../assets/albert.svg';


function SendingMessage(props) {

    return (
        <View style={styles.container}>
            <View style={{padding:15,justifyContent:'space-between', flexDirection:'column', borderRadius:15, backgroundColor:'#F5F5F5', width:'80%', alignItems:'flex-start'}}>
                <Text style={{fontSize:15}}>{props.message}</Text>
            </View>
        </View>
    );
}


export default SendingMessage;