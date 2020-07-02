import React, { useRef, useEffect, useState } from 'react';
import styles from './styles';
import { View, Animated, Dimensions, Easing, Text } from 'react-native';
import Albert from '../../assets/albert.svg';


function ReceivedMessage(props) {

    return (
        <View style={styles.container}>
            <View>
                <Albert width={50} height={50} />
            </View>
            <View style={{padding:5,justifyContent:'space-between', flexDirection:'column', height:60, borderRadius:20, backgroundColor:'#CEC', width:'80%', alignItems:'flex-start'}}>
                <Text style={{fontSize:17}}>{props.name}</Text>
                <Text>{props.message}</Text>
            </View>
        

        </View>
    );
}


export default ReceivedMessage;