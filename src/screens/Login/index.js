import React, { useRef, useEffect } from 'react';
import styles from './styles';
import { View, Animated, Dimensions, Easing, Text } from 'react-native';

const screenHeight = Math.round(Dimensions.get('window').height);

const thirty = (20 * screenHeight) / 100;


function Login() {

    const fadeAnim = useRef(new Animated.Value(screenHeight)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
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


    return(
        <View style={styles.container}>
        <Animated.View style={[styles.BoxHeader, { height: fadeAnim }]}>
        <Text>Entrar</Text>
        </Animated.View>
        <View style={styles.boxContainerBottom}>

        </View>
        </View>
    );
}


export default Login;