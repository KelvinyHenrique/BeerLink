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
        <View>
          <Text> 3.000 </Text>
          <Text> Créditos</Text>
        </View>
        <View>
          <Text>Resgatar CashBack</Text>
          <Text>Editar Perfil</Text>
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
    height: 40,
    width: 40,
    marginEnd: 30,
  },
});
