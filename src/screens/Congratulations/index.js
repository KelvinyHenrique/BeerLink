import React from 'react';
import Beer from '../../assets/Rectangle 22 (1).png';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export default function Congratulations() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 50,
        }}>
        Parabéns
      </Text>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          textAlign: 'center',
          fontSize: 25,
          lineHeight: 29,
          color: '#FFFFFF',
          marginTop: 30,
        }}>
        Você ganhou um colecionável épico e{' '}
        <Text style={{fontWeight: 'bold'}}> 20 minutos </Text> no bar
      </Text>
      <Image source={Beer} style={{height: 300, width: 300}} />
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderRadius: 30,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontSize: 26,
            marginLeft: 30,
            marginRight: 30,
            padding: 5,
            color: '#BA0C2F',
          }}>
          Resgatar Prêmios
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BA0C2F',
  },
});
