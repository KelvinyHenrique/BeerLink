import React, { useRef, useEffect } from 'react';
import Albert from '../../assets/albert.svg';
import Chat from '../../assets/chat.svg';
import { View, Animated, Dimensions, Easing, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { TextInput, TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

function UserMessage() {

    return (
        <TouchableOpacity style={styles.container}>

            <View style={{ width: '50%', flexDirection: 'row' }}>
                <Albert width={50} height={50} />
                <View style={{ width: '100%', alignItems: 'flex-start', justifyContent: 'center', marginLeft: 15 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Bruno Bruno</Text>
                    <Text style={{ fontSize: 14, color: '#CECECE' }}>Bora beber?</Text>
                </View>
            </View>

            <View style={{width:"50%", height:'100%', justifyContent:'flex-end', flexDirection:'row', alignItems:'flex-end' , backgroundColor: '#BA0C2F', width: 35, height: 35, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 13, color: '#FFF' }}>1</Text>
            </View>
            
        </TouchableOpacity>
    );
}

export default UserMessage;