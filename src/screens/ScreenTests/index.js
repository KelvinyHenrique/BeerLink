import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ScreenTests() {
    const navigation = useNavigation();
    const goToScanner = () => {
        navigation.navigate('Mapa');
    }

    
    const goToBar = () => {
        navigation.navigate('Congratulations');
    }



    return (
        <View style={{width:'100%', alignItems:'center', justifyContent:'space-around'}}>
            <TouchableHighlight onPress={goToScanner} style={{width:'90%', height:50, alignItems:'center', backgroundColor:'#BA0C2F', alignItems:'center', justifyContent:'center', marginTop:20}}><Text style={{fontSize:20,color:'#FFF'}}>Tela de Mapa</Text></TouchableHighlight>
            <TouchableHighlight onPress={goToBar}style={{width:'90%', height:50, alignItems:'center', backgroundColor:'#BA0C2F', alignItems:'center', justifyContent:'center', marginTop:20}}><Text style={{fontSize:20,color:'#FFF'}}>Tela de Recompensas</Text></TouchableHighlight>
        </View>
    );
}