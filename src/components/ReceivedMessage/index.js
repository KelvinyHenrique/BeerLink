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
            <View style={{justifyContent:'space-between', flexDirection:'column', height:50}}>
                <Text>{props.name}</Text>
                <Text>{props.message}</Text>
            </View>
        

        </View>
    );
}


export default ReceivedMessage;