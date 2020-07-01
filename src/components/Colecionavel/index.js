import React, { useRef, useEffect } from 'react';
import Albert from '../../assets/albert.svg';
import Chat from '../../assets/chat.svg';
import BeerCup from '../../assets/beer.svg';
import { View, Animated, Dimensions, Easing, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { TextInput, TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

function Colecionavel() {

    return (
        <TouchableOpacity style={styles.container}>
            <BeerCup width={120} height={120} />
        </TouchableOpacity>
    );
}

export default Colecionavel;