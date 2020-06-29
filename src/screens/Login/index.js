import React, { useRef, useEffect } from 'react';
import styles from './styles';
import { View, Animated, Dimensions, Easing, Text } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

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


    return (
        <View style={styles.container}>
            <Animated.View style={[styles.BoxHeader, { height: fadeAnim }]}>
                <Text style={{ fontSize: 35, color: '#FFF', fontWeight: 'bold', }}>Entrar</Text>
            </Animated.View>
            <View style={styles.boxContainerBottom}>
                <View style={{ alignItems: "flex-start", justifyContent: 'center', width: '80%', height: 120, }}>
                    <Text style={{ fontSize: 30, color: '#BA0C2F', fontWeight: 'bold', }}>Bem Vindo</Text>
                    <Text style={{ fontSize: 15, color: '#cecece', marginTop: 6 }}>Olá, Faça login para continuar!</Text>
                </View>

                <View style={{width:'85%'}}>
                    <View>
                        <Text style={{fontSize:15, color:'#CECECE'}}>Nome de usuário ou email</Text>
                        <TextInput style={{width: '100%', height:40, backgroundColor:'#F0F0F0', marginTop:10, borderRadius:7,}} />
                    </View>
                    <View>
                    <Text style={{fontSize:15, color:'#CECECE', marginTop:15}}>Senha</Text>
                        <TextInput style={{width: '100%', height:40, backgroundColor:'#F0F0F0', marginTop:10, borderRadius:7,}} />
                    </View>
                    <View style={{width:'100%', alignItems:'flex-start', height:100, justifyContent:'center',flexDirection:'column'}}>
                        <Text style={{fontSize:15, color: '#BA0C2F'}}>Esqueceu a senha?</Text>
                        <TouchableHighlight style={{width: 350, height:47, backgroundColor:'#BA0C2F', marginTop:10, borderRadius:7, alignItems:'center', justifyContent:'center', marginTop:20}} >
                            <Text style={{fontSize:17,fontWeight:'bold', color:'#FFF'}}>Entrar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{width:'100%', alignItems:'center', justifyContent:'flex-end', height:50, flexDirection:'column'}}>
                    <Text>Não tem conta? Cadastre-se</Text>
                </View>
            </View>
        </View>
    );
}


export default Login;