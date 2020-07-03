'use strict';

import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {useNavigation} from '@react-navigation/native';

export default function ScanScreen() {
  const navigate = useNavigation();
  // eslint-disable-next-line no-undef
  function onSuccess(e) {
    if (e.data == 'code') {
      navigate.navigate('Model');
    } else {
      alert('Código inválido!');
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#BA0C2F',
      }}>
      <QRCodeScanner
        onRead={onSuccess}
        topContent={
          <Text style={styles.centerText}>
            Aperte no scanner para escanear o código
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Escanear QrCode</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    fontSize: 18,
    padding: 5,
    color: 'white',
    marginBottom: 35,
    fontWeight: 'bold',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    marginTop: 40,
    color: '#BA0C2F',
    backgroundColor: 'white',
    height: 33,
    borderRadius: 20,
    padding: 2,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonTouchable: {
    padding: 2,
    fontWeight: 'bold',
  },
});
