import React, { useRef, useEffect, useState } from 'react';
import styles from './styles';
import { View, Animated, Dimensions, Easing, Text } from 'react-native';
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Math.round(Dimensions.get('window').height);

const thirty = (10 * screenHeight) / 100;


function SignIn() {

    const fadeAnim = useRef(new Animated.Value(screenHeight)).current;

    const [checkColor, setCheckColor] = useState('#F0F0F0');

    const HandleColorCheck = () => {
        if(checkColor === '#F0F0F0') {
            setCheckColor('#BA0C2F');
        } else {
            setCheckColor('#F0F0F0');
        }
    }

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
                <Text style={{ fontSize: 35, color: '#FFF', fontWeight: 'bold', }}>Criar Conta</Text>
            </Animated.View>
            <View style={styles.boxContainerBottom}>
                <View style={{ alignItems: "flex-start", justifyContent: 'center', width: '80%', height: 120, }}>
                    <Text style={{ fontSize: 30, color: '#BA0C2F', fontWeight: 'bold', }}>Bem Vindo</Text>
                    <Text style={{ fontSize: 15, color: '#cecece', marginTop: 6 }}>Olá, cadastre-se para continuar!</Text>
                </View>

                <View style={{ width: '85%' }}>
                    <View>
                        <Text style={{ fontSize: 15, color: '#CECECE' }}>Name</Text>
                        <TextInput style={{ width: '100%', height: 40, backgroundColor: '#F0F0F0', marginTop: 10, borderRadius: 7, }} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, color: '#CECECE', marginTop: 15 }}>Email</Text>
                        <TextInput style={{ width: '100%', height: 40, backgroundColor: '#F0F0F0', marginTop: 10, borderRadius: 7, }} />
                    </View>

                    <View>
                        <Text style={{ fontSize: 15, color: '#CECECE', marginTop: 15 }}>Senha</Text>
                        <TextInput style={{ width: '100%', height: 40, backgroundColor: '#F0F0F0', marginTop: 10, borderRadius: 7, }} />
                    </View>

                    <View style={{marginTop:20, paddingLeft:7,justifyContent:'center', width:'100%', height:50, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <TouchableHighlight style={{width:20, height:20, backgroundColor: checkColor, borderRadius:4}} onPress={HandleColorCheck} underlayColor='#BA0C2F'></TouchableHighlight>
                        <Text style={{fontSize:16, flexWrap:"wrap", marginLeft:15}}>Ao criar uma conta, você concorda com os termos e condições</Text>
                    </View>

                    <View style={{ width: '100%', alignItems: 'flex-start', height: 100, justifyContent: 'center', flexDirection: 'column' }}>
                        <TouchableHighlight style={{ width: 350, height: 47, backgroundColor: '#BA0C2F', borderRadius: 7, alignItems: 'center', justifyContent: 'center', marginTop: 20 }} >
                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#FFF' }}>Entrar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: 50, flexDirection: 'row' }}>
                    <Text style={{fontSize:15, marginRight:7}}>Já tem uma conta?</Text><TouchableOpacity><Text style={{color:'#BA0C2F', fontWeight:'bold', fontSize:15}}>Entrar</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


export default SignIn;