import React, { useRef, useEffect, useState } from 'react';
import styles from './styles';
import { View, Animated, Dimensions, Easing, Text } from 'react-native';
import Albert from '../../assets/albert.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';


function ReceivedMessage(props) {

    const handleProfileClick = () => {
        alert("Olá mundo");
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleProfileClick}>
            <View>
                <Albert width={50} height={50} />
            </View>
            <View style={{padding:15,justifyContent:'space-between', flexDirection:'column', borderRadius:15, backgroundColor:'#F5F5F5', width:'80%', alignItems:'flex-start'}}>
                <Text style={{fontSize:17}}>{props.name}</Text>
                <Text style={{fontSize:15}}>{props.message}</Text>
            </View>
        

        </TouchableOpacity>
    );
}


export default ReceivedMessage;