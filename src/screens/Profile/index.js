import React from 'react';
import {Text, SafeAreaView, Image, StyleSheet, View} from 'react-native';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={{
            uri:
              'https://avatars3.githubusercontent.com/u/36752711?s=460&u=740b3ce32fb6ce710151f66bdf65cc0cc3580cdc&v=4',
          }}
          style={styles.image}
        />
        <Text style={styles.name}>João das Neves</Text>
        <View style={styles.cash}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}> 3.000 </Text>
          <Text style={{color: '#ED6A5E', fontSize: 15}}> Créditos</Text>
        </View>
        <View>
          <Text style={styles.info}>Resgatar CashBack</Text>
          <Text style={styles.edit}>Editar Perfil</Text>
        </View>
      </View>
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
  image: {
    height: 160,
    width: 160,
    borderRadius: 20,
  },
  name: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
  edit: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#ED6A5E',
    textAlign: 'center',
    marginTop: 10,
    borderRadius: 7,
  },
  cash: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    margin: 20,
    borderRadius: 3,
  },
  info: {
    color: 'white',
    fontSize: 20,
  },
});
