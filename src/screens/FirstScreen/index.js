import React from 'react';
import styles from './styles';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import GoogleIcon from '../../assets/google.svg';
import { useNavigation } from '@react-navigation/native';


function FirstScreen() {
    const navigation = useNavigation();
    const handleNavigationLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <View style={styles.BoxContent}>
                <View style={styles.boxHello}>
                    <Text style={styles.welcome}>Bem Vindo</Text>
                    <View>
                         <Text style={styles.title}>Lorem Ipsum is simply</Text>
                    <Text style={styles.subtitle}>It is a long established</Text> 
                    </View>
                  
                </View>
                <View style={styles.boxButons}>
                    <TouchableHighlight style={styles.btnsigninGoogle} onPress={handleNavigationLogin}>
                        <View style={{flexDirection:'row-reverse', alignItems:'center', justifyContent:'space-around', width:'70%'}}>
                            <Text style={styles.goToLogin}>Faça login no Google</Text>
                            <GoogleIcon  width={25} height={25}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.btncreateAccount}>
                        <Text style={styles.btnTextcreateAccount}>Crie sua conta</Text>
                    </TouchableHighlight>
                </View>
                
                <View style={{flexDirection:'row', width:'100%', alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.loginConvenc}>Já tem uma conta?</Text>
                    <Text style={styles.entrar}>Entrar</Text>
                    </View>
               
            </View>
        </View>
    );
}


export default FirstScreen;