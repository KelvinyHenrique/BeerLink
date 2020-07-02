import React, { useRef, useEffect, useState } from 'react';
import styles from './styles';
import { View, Animated, Dimensions, Easing, Text } from 'react-native';
import { TextInput, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Profiles from '../../components/Profiles';
import SendingMessage from '../../components/SendingMessage';
import ReceivedMessage from '../../components/ReceivedMessage';
const screenHeight = Math.round(Dimensions.get('window').height);

const thirty = (40 * screenHeight) / 100;


function VirtualBar() {

    const fadeAnim = useRef(new Animated.Value(screenHeight)).current;
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: thirty,
            duration: 1500,
            easing: Easing.bounce,
            useNativeDriver: false
        }).start();
    };
    useEffect(() => {
        fadeIn();
    }, []);


    return (
        <View style={styles.container}>
            <Animated.View style={[styles.BoxHeader, { height: fadeAnim }]}>
                <Text style={{ fontSize: 35, color: '#FFF', fontWeight: 'bold', }}>Criar Conta</Text>
            </Animated.View>
            <View style={styles.boxContainerBottom}>
                <View style={styles.chatContainer}>
                    <Text style={{ fontSize: 20, color: '#7C7C7C', paddingTop:10, alignSelf:'center', width:'90%', fontWeight:'bold'}}>Últimas Interações</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Profiles name="Kelviny" image="kelviny" />
                        <Profiles name="Kelviny" image="kelviny" />
                        <Profiles name="Kelviny" image="kelviny" />
                        <Profiles name="Kelviny" image="kelviny" />
                        <Profiles name="Kelviny" image="kelviny" />
                        <Profiles name="Kelviny" image="kelviny" />
                        <Profiles name="Kelviny" image="kelviny" />
                        <Profiles name="Kelviny" image="kelviny" />
                    </ScrollView>
                </View>
                <View>
                        <SendingMessage />
                        <ReceivedMessage name="Kelviny" message="Eae mano beleza? bora conversar no pv?"/>
                    </View>
            </View>
        </View>
    );
}


export default VirtualBar;